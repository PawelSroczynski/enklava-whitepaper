import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import DocActions from '@site/src/components/DocActions';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const editUrl = metadata?.editUrl;

  return (
    <div style={{ position: 'relative' }}>
      <DocActions editUrl={editUrl} />
      <div className="doc-content-with-actions">
        <Content {...props} />
      </div>
    </div>
  );
}
