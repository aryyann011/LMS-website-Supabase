import { useState, useRef, useEffect } from "react";

export default function Dropdown({ title, subtitle, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="border border-gray-700 rounded-md overflow-hidden">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer bg-gray-800 px-4 py-3"
      >
        <div className="text-white font-semibold">{title}</div>
        <div className="text-gray-400">{subtitle}</div>
      </div>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out bg-gray-900 overflow-hidden"
        style={{ maxHeight: height }}
      >
        <div className="px-6 py-3 space-y-2 text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
