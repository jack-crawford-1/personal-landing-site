function Tooltip({
  children,
  text,
  className,
}: {
  children: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div className="relative inline-block tooltip group">
      {children}
      <span
        className={`invisible group-hover:visible w-28 bg-gray-800 text-white text-center p-1 rounded absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300  ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

export default Tooltip;
