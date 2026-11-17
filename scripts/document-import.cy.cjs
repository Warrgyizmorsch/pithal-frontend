/* Run against a local dev server with an e2e config pointing to this spec.
 * All admin APIs are intercepted; no database changes are made.
 * Optionally pass --env documentHtml=/tmp/pithal-google-doc.html for the shared document.
 */
describe('City long content document import', () => {
  const draft = {
    name: 'Jaipur', state: 'Rajasthan', slug: 'stone-crusher-jaipur', citySlug: 'jaipur', productSlug: 'stone-crusher',
    h1: 'Stone Crusher in Jaipur', subheading: 'Equipment for Jaipur', capacityValue: '150–600', capacityLabel: 'TPH capacity',
    longContent: 'Existing plain content.', faqs: [], updatedAt: '2026-11-17T00:00:00Z',
  };
  beforeEach(() => {
    cy.intercept('GET', '**/api/blogs*', { success: true, data: [] });
    cy.intercept('GET', '**/api/leads*', { success: true, data: [] });
    cy.intercept('GET', '**/api/users*', { success: true, data: [] });
    cy.intercept('GET', '**/api/cities', { success: true, data: [draft] });
    cy.visit('/admin/cities', {
      onBeforeLoad(win) {
        win.localStorage.setItem('pithal_admin_auth', 'true');
        win.localStorage.setItem('pithal_admin_theme', 'light');
        win.localStorage.setItem('pithal_admin_current_user', JSON.stringify({ id: 'test', email: 'editor@example.invalid', password: 'test-only', role: 'Super Admin', name: 'Test Editor', avatar: 'TE' }));
      },
    });
    cy.get('[contenteditable=true][aria-labelledby=long-content-label]').as('editor').should('contain.text', draft.longContent);
  });

  it('preserves pasted headings and emphasis through preview and save', () => {
    cy.get('@editor').focus().then($editor => {
      const win = $editor[0].ownerDocument.defaultView;
      const range = win.document.createRange();
      range.selectNodeContents($editor[0]);
      win.getSelection().removeAllRanges();
      win.getSelection().addRange(range);
      const clipboard = new win.DataTransfer();
      clipboard.setData('text/html', '<b style="font-weight:normal"><h2>Machine types</h2><h3>Jaw crushers</h3><p><span style="font-weight:700">Keep bold</span> and <span style="font-style:italic">keep italic</span>.</p><table><tr><th>Capacity</th><td>600 TPH</td></tr></table><script>window.importXss=true</script><img src="x" onerror="window.importXss=true"></b>');
      $editor[0].dispatchEvent(new win.ClipboardEvent('paste', { clipboardData: clipboard, bubbles: true, cancelable: true }));
    });
    cy.get('@editor').find('h2').should('have.text', 'Machine types');
    cy.get('@editor').find('h3').should('have.text', 'Jaw crushers');
    cy.get('@editor').find('strong').should('have.text', 'Keep bold');
    cy.get('@editor').find('em').should('have.text', 'keep italic');
    cy.window().its('importXss').should('not.exist');
    cy.contains('button', 'Show Content Preview').click();
    cy.contains('h3', "Buyer's Guide / Long Content Preview").parent().within(() => {
      cy.get('h2').should('have.text', 'Machine types');
      cy.get('h3').should('contain.text', 'Jaw crushers');
      cy.get('strong').should('have.css', 'font-weight', '700');
      cy.get('table').should('contain.text', '600 TPH');
    });
    cy.intercept('PATCH', '**/api/cities/stone-crusher-jaipur', request => {
      expect(request.body.longContent).to.include('<h2>Machine types</h2>');
      expect(request.body.longContent).to.include('<h3>Jaw crushers</h3>');
      expect(request.body.longContent).to.include('<strong>Keep bold</strong>');
      expect(request.body.longContent).not.to.match(/script|onerror/);
      request.reply({ success: true, data: { ...draft, ...request.body } });
    }).as('save');
    cy.contains('button', 'Save Product Content').click();
    cy.wait('@save');
    cy.get('@editor').find('h3').should('have.text', 'Jaw crushers');
  });

  it('imports individual articles from a Google Doc without changing their headings or text', () => {
    cy.readFile(Cypress.env('documentHtml') || 'scripts/fixtures/city-document.html').then(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const titles = [...doc.querySelectorAll('h1')].map(heading => heading.textContent.trim());
      const headingTexts = [];
      let inArticle = false;
      for (const node of doc.body.children) {
        if (node.tagName === 'H1') {
          if (inArticle) break;
          if (node.textContent.trim() === titles[1]) inArticle = true;
        }
        if (inArticle && /^H[1-6]$/.test(node.tagName)) headingTexts.push([node.tagName, node.textContent.trim()]);
      }
      cy.intercept('POST', '**/api/cities/import-document', { success: true, html }).as('import');
      cy.get('input[placeholder^="https://docs.google.com"]').type('https://docs.google.com/document/d/test/edit');
      cy.contains('button', 'Import Google Doc').click();
      cy.wait('@import');
      cy.contains('label', 'Choose article').find('select').as('articles').find('option').should('have.length', titles.length);
      cy.get('@articles').select(titles[1]);
      cy.contains('button', 'Use selected article').click();
      cy.get('@editor').find('h1').should('have.text', titles[1]);
      cy.get('@editor').find('h1,h2,h3,h4,h5,h6').then(headings => {
        expect([...headings].map(heading => [heading.tagName, heading.textContent.trim()])).to.deep.equal(headingTexts);
      });
      cy.get('@editor').invoke('text').then(text => {
        const next = doc.querySelectorAll('h1')[1];
        let start = next;
        for (let node = next.previousElementSibling; node && node.tagName !== 'H1'; node = node.previousElementSibling) {
          if (/^meta\s+title\s*:/i.test(node.textContent.trim())) { start = node; break; }
        }
        let expected = '';
        for (let node = start; node; node = node.nextElementSibling) {
          if (node !== start && node !== next && (node.tagName === 'H1' || /^meta\s+title\s*:/i.test(node.textContent.trim()))) break;
          expected += node.textContent;
        }
        expect(text.replace(/\s/g, '')).to.equal(expected.replace(/\s/g, ''));
      });
    });
  });

  it('uploads HTML and continues to support Markdown', () => {
    cy.get('input[type=file][accept^=".docx"]').selectFile({ contents: Cypress.Buffer.from('<h2>Uploaded heading</h2><h3>Uploaded subheading</h3><p>Complete text.</p>'), fileName: 'guide.html', mimeType: 'text/html' }, { force: true });
    cy.get('@editor').find('h3').should('have.text', 'Uploaded subheading');
    cy.contains('button', 'HTML / Markdown source').click();
    cy.get('textarea[aria-labelledby=long-content-label]').clear().type('## Markdown heading\n\n### Subheading\n\nText with **bold**.');
    cy.contains('button', 'Visual editor').click();
    cy.get('@editor').find('h2').should('have.text', 'Markdown heading');
    cy.get('@editor').find('h3').should('have.text', 'Subheading');
    cy.get('@editor').find('strong').should('have.text', 'bold');
  });
});
