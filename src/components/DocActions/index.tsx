import React, { useState } from 'react';
import styles from './styles.module.css';

interface DocActionsProps {
  editUrl?: string;
}

export default function DocActions({ editUrl }: DocActionsProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Find the markdown content container
      const content = document.querySelector('.markdown');
      if (content) {
        await navigator.clipboard.writeText(content.innerText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.docActions}>
      <button
        className={`${styles.actionButton} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        data-tooltip="Copy content"
        aria-label="Copy page content"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>

      {editUrl && (
        <a
          className={styles.actionButton}
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip="Edit on GitHub"
          aria-label="Edit this page on GitHub"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </a>
      )}
    </div>
  );
}
