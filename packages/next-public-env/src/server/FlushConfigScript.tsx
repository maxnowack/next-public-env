import { createScriptContent } from './flushScript.js';

export const FlushConfigScript: React.FC<{ config: string; nonce?: string }> = ({
  config,
  nonce,
}) => {
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
};
