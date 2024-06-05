import React from "react";

const MintGlassEffect = () => {
  return (
    <>
      <div
        className=" blur-lg absolute left-[50%] top-[50%] z-10 opacity-40"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg
          width="349"
          height="350"
          viewBox="0 0 549 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="274.773"
            cy="275.008"
            r="274.178"
            fill="url(#paint0_radial_0_1183)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_1183"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(274.773 275.008) rotate(39.0393) scale(285.124)"
            >
              <stop stop-color="#34C77B" />
              <stop offset="1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default MintGlassEffect;
