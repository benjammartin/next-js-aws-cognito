import * as React from "react";

function SvgRefresh(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 2v6h6m13 14v-6h-6" />
      <path d="M22 11.5A10 10 0 003.2 7.2M2 12.5a10 10 0 0018.8 4.2" />
    </svg>
  );
}

export default SvgRefresh;
