import * as React from "react";

function SvgSearch(props) {
  return (
    <svg width={24} height={24} {...props}>
      <defs>
        <path
          id="search_svg__a"
          d="M16.028 2.746c-3.662-3.661-9.621-3.661-13.283 0-3.66 3.662-3.66 9.62 0 13.282 3.261 3.26 8.34 3.609 11.998 1.063.077.365.253.712.537.996l5.332 5.331a1.983 1.983 0 002.806 0 1.981 1.981 0 000-2.805l-5.332-5.334a1.984 1.984 0 00-.995-.535c2.547-3.66 2.198-8.736-1.063-11.998zm-1.684 11.598c-2.734 2.734-7.182 2.734-9.915 0-2.732-2.733-2.732-7.18 0-9.914 2.733-2.733 7.181-2.733 9.915 0a7.018 7.018 0 010 9.914z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="search_svg__b" fill="#fff">
          <use xlinkHref="#search_svg__a" />
        </mask>
        <use fill="#000" fillRule="nonzero" xlinkHref="#search_svg__a" />
        <g mask="url(#search_svg__b)">
          <path d="M0 0h24v24H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSearch;
