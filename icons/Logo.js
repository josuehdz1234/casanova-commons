import * as React from "react";

function SvgLogo(props) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={60} cy={60} r={60} fill="#F5F5F5" />
        <path
          fill="#001A70"
          d="M82.124 72.512c-4.3 6.879-11.896 10.82-20.851 10.82h-.06c-13.394-.027-24.29-10.518-24.29-23.385 0-12.605 11.314-23.255 24.704-23.255 8.288 0 15.874 4.208 20.295 11.255l.07.112h7.83l-.125-.31C85.491 37.3 73.943 30 61.614 30 44.182 30 30 43.48 30 60.048 30 76.564 44.269 90 61.807 90c12.256 0 23-6.622 28.04-17.28L90 72.4h-7.806l-.07.113z"
        />
        <path
          fill="#F2A000"
          d="M60 55.797h40V52.5H60zm0 12.807h35v-3.297H60zm0-6.403h50v-3.298H60z"
        />
      </g>
    </svg>
  );
}

export default SvgLogo;
