import React, { useState } from 'react';
import styles from './styles.module.css';

interface DocActionsProps {
  editUrl?: string;
}

export default function DocActions({ editUrl }: DocActionsProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.docActions}>
      <button
        className={`${styles.actionButton} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        data-tooltip="Copy link"
        aria-label="Copy link to page"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
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
