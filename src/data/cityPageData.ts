export function getCitySections(city: string) {
  return {
      reasons: [
        { n: '01', t: 'Factory-direct from Rajasthan', d: 'Built at our RIICO Kaladwas, Udaipur plant and dispatched straight to your site in ' + city + '.' },
        { n: '02', t: 'Site survey & plant layout', d: 'Our engineers study your rock, feed size and output target before recommending a jaw, cone or VSI setup.' },
        { n: '03', t: 'Installation & commissioning', d: 'Our team erects, aligns and test-runs the plant at your site so production starts on schedule.' },
        { n: '04', t: 'After-sales & spare parts', d: 'Wear parts, service visits and troubleshooting support to keep downtime low.' },
        { n: '05', t: 'Precision engineering', d: 'Heavy-duty fabrication under strict quality control, designed for continuous running.' },
        { n: '06', t: '150–600 TPH range', d: 'From a single primary crusher to a complete multi-stage plant, sized to your project.' }
      ],
      products: [
        { t: 'Prime Jaw Crushers', d: 'Primary crushing of hard rock, granite and boulders at quarry face.', tag: 'Primary stage' },
        { t: 'Prime Cone Crushers', d: 'Secondary and tertiary crushing for well-shaped, cubical aggregates.', tag: 'Secondary stage' },
        { t: 'Prime VSI Crushers', d: 'Sand making and shaping for high-quality manufactured sand.', tag: 'Sand & shaping' },
        { t: 'Prime M-Sand Crusher Plant', d: 'Complete manufactured-sand line for construction and RMC demand.', tag: 'Complete line' },
        { t: 'Prime Vibrating Screens', d: 'Accurate sizing of aggregates into multiple saleable products.', tag: 'Screening' },
        { t: 'Prime Complete Plants', d: 'Turnkey crushing & screening plants from 150 to 600 TPH.', tag: 'Turnkey' }
      ],
      industries: [
        { t: 'Mining', d: 'Primary and secondary crushing of mined rock and ore.' },
        { t: 'Infrastructure', d: 'Aggregates for highways, bridges and public works.' },
        { t: 'Cement', d: 'Limestone and raw-material crushing for cement units.' },
        { t: 'Aggregates', d: 'Graded stone and M-sand for quarries and suppliers.' },
        { t: 'Recycling', d: 'Crushing construction & demolition waste for reuse.' },
        { t: 'Construction', d: 'Material for real-estate, RMC and building contractors.' }
      ],
      projects: [ { cap: '250 TPH' }, { cap: '350 TPH' }, { cap: '500 TPH' } ],
      steps: [
        { n: '01', t: 'Share requirement', d: 'Capacity, rock type and product sizes.' },
        { n: '02', t: 'Site & material check', d: 'Engineer reviews your site in ' + city + '.' },
        { n: '03', t: 'Layout & quotation', d: 'Plant design with itemised price.' },
        { n: '04', t: 'Manufacturing', d: 'Built and tested at our Udaipur factory.' },
        { n: '05', t: 'Delivery & installation', d: 'Dispatch, erection and alignment at site.' },
        { n: '06', t: 'Commissioning & support', d: 'Trial run, training and 24x7 support.' }
      ],
      factors: [
        { t: 'Capacity (TPH)', d: 'Output per hour drives machine size.' },
        { t: 'Rock type & hardness', d: 'Granite, basalt or limestone change wear and model.' },
        { t: 'Crushing stages', d: 'Single, two or three-stage plant.' },
        { t: 'Final product sizes', d: 'Aggregate grades and M-sand needs.' },
        { t: 'Screens, feeders & conveyors', d: 'The supporting equipment in the line.' },
        { t: 'Freight & installation', d: 'Transport to ' + city + ' and site work.' }
      ],
  };
}
