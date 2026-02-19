import React from "react";

const ShapeDivider = () => {
  return (
    <div className="custom-shape-divider-bottom">
      <svg
      className="h-[100px] md:h-[150px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
          className="fill-white dark:fill-black"
        />
      </svg>

      <style jsx>{`
        .custom-shape-divider-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        .custom-shape-divider-bottom svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          
        }
      `}</style>
    </div>
  );
};

export default ShapeDivider;
