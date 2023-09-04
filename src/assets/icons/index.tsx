import { SVGProps } from "react";

export type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;

export default {
  ExitScreen: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1.8em"
      width="1.8em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4L8 4 8 8 4 8 4 10 10 10zM8 20L10 20 10 14 4 14 4 16 8 16zM20 14L14 14 14 20 16 20 16 16 20 16zM20 8L16 8 16 4 14 4 14 10 20 10z"></path>
    </svg>
  ),
  FullScreen: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1.8em"
      width="1.8em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 5L10 5 10 3 3 3 3 10 5 10zM10 19L5 19 5 14 3 14 3 21 10 21zM21 14L19 14 19 19 14 19 14 21 21 21zM19 10L21 10 21 3 14 3 14 5 19 5z"></path>
    </svg>
  ),
  ZoomImageOut: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1.8em"
      width="1.8em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 6L9 6 9 9 6 9 6 11 9 11 9 14 11 14 11 11 14 11 14 9 11 9z"></path>
      <path d="M10,2c-4.411,0-8,3.589-8,8s3.589,8,8,8c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396 C17.365,13.543,18,11.846,18,10C18,5.589,14.411,2,10,2z M10,16c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S13.309,16,10,16z"></path>
    </svg>
  ),
  ZoomImageIn: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1.8em"
      width="1.8em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9H14V11H6z"></path>
      <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
    </svg>
  ),
  ImagePlay: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="2.3em"
      width="2.3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 6L7 18 17 12z"></path>
    </svg>
  ),
  ImagePause: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="2.3em"
      width="2.3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 7H11V17H8zM13 7H16V17H13z"></path>
    </svg>
  ),
  ImageDownload: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1.7em"
      width="1.7em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  ),
  ImageClose: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1.8em"
      width="1.8em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
    </svg>
  ),
  ImageNext: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1.5em"
      width="1.5em"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
    </svg>
  ),
  ImagePrev: (props: IconType) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1.5em"
      width="1.5em"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
    </svg>
  ),
};
