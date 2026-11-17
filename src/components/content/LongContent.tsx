import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { isHtmlContent, sanitizeLongContent } from "@/lib/long-content";
import styles from "./LongContent.module.css";

export function LongContent({ content }: { content: string }) {
  return isHtmlContent(content)
    ? <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizeLongContent(content) }} />
    : <div className={styles.content}><ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown></div>;
}
