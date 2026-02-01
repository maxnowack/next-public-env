'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { useRef } from 'react';
import { createScriptContent } from './flushScript.js';

export const FlushConfig: React.FC<{ config: string; nonce?: string }> = ({
  config,
  nonce,
}) => {
  const hasFlushed = useRef(false);

  useServerInsertedHTML(() => {
    if (hasFlushed.current) return null;

    hasFlushed.current = true;
    const scriptContent = createScriptContent(config);

    return (
      <script
        dangerouslySetInnerHTML={{
          __html: scriptContent,
        }}
        type="text/javascript"
        nonce={nonce}
      />
    );
  });

  return null;
};
