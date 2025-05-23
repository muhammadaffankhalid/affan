import * as React from "react";
import type { SVGProps } from "react";
const SvgSCharacter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    aria-hidden="true"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#6366f1"
      d="M64 4L16 124h24l8-24h32l8 24h24L64 4zm0 20.8L80.4 80H47.6L64 24.8z"
    />
  </svg>
);
export default SvgSCharacter;
