import { useEffect, useRef, useState } from "react";

const COPIED_RESET_MS = 1500;

/** Labelled code listing with a copy-to-clipboard button. */
const CodeBlock = ({ label, lang, code }) => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), COPIED_RESET_MS);
    } catch {
      // Clipboard access can be denied (insecure context, permissions); the
      // code is still selectable, so there is nothing else to do.
    }
  };

  return (
    <figure className="min-w-0 border border-line bg-bg">
      <figcaption className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <span className="hud-label !text-[10.5px] text-faint">{label}</span>
        <span className="flex items-center gap-3">
          <span className="hud-label !text-[10.5px] text-accent-2">{lang}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="hud-label !text-[10.5px] text-dim transition-colors hover:text-accent"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </span>
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.65] text-ink/90">
        <code>{code}</code>
      </pre>
    </figure>
  );
};

export default CodeBlock;
