import * as React from "react";

function SvgEye(props) {
  return (
    <svg width={24} height={24} {...props}>
      <defs>
        <path
          id="eye_svg__a"
          d="M23.802 6.465a.83.83 0 01.025 1.037c-.049.066-1.264 1.65-3.326 3.237-1.22.938-2.488 1.687-3.766 2.229-1.626.683-3.272 1.032-4.898 1.032C7.732 14 3.814 11.828.194 7.535A.83.83 0 01.17 6.498c.049-.066 1.263-1.65 3.326-3.237 1.22-.938 2.488-1.687 3.766-2.229C8.888.349 10.534 0 12.16 0c4.105 0 8.018 2.177 11.642 6.465zM19.36 9.443a18.763 18.763 0 002.616-2.431c-3.135-3.525-6.436-5.31-9.82-5.31-3.136 0-5.82 1.554-7.524 2.86a19.055 19.055 0 00-2.616 2.43c3.135 3.526 6.436 5.312 9.82 5.312 3.135 0 5.82-1.555 7.524-2.86zm-4.114-3.289c.485 0 .881.382.881.848 0 2.192-1.851 3.977-4.134 3.977-2.282 0-4.133-1.785-4.133-3.977 0-2.19 1.851-3.977 4.133-3.977.485 0 .882.382.882.848 0 .467-.397.849-.882.849-1.307 0-2.37 1.022-2.37 2.28 0 1.259 1.063 2.281 2.37 2.281 1.308 0 2.371-1.022 2.371-2.28 0-.467.397-.849.882-.849z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(0 5)">
        <mask id="eye_svg__b" fill="#fff">
          <use xlinkHref="#eye_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#eye_svg__a" />
        <g fill="#007AFF" mask="url(#eye_svg__b)">
          <path d="M0-5h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgEye;