interface CodeStylerProps {
  code: string;
  label?: string;
  className?: string;
}

export default function CodeStyler({
  code,
  label,
  className = "",
}: CodeStylerProps) {
  return (
    <div
      className={`rounded-3xl border border-blue-100 bg-metabase-bg-neutral-98 p-4 text-left shadow-sm ${className}`}
    >
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          {label}
        </p>
      ) : null}
      <pre className="mt-3 overflow-x-auto text-xs leading-relaxed text-gray-800 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
