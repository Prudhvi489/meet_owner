import React from "react";

const FavIcon = (props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="13"
        cy="13"
        r="12.5"
        fill="white"
        fill-opacity="0.6"
        stroke="#1D3A76"
      />
      <path
        d="M10.2046 8C8.43477 8 7 9.43477 7 11.2046C7 14.4091 10.7872 17.3224 12.8265 18C14.8658 17.3224 18.653 14.4091 18.653 11.2046C18.653 9.43477 17.2182 8 15.4484 8C14.3647 8 13.4062 8.53808 12.8265 9.36165C12.531 8.94075 12.1384 8.59724 11.682 8.36022C11.2256 8.1232 10.7188 7.99964 10.2046 8Z"
        stroke="#1D3A76"
        stroke-width="1.1653"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FavIcon;
