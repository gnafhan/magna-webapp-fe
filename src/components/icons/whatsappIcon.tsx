import React, { FC } from "react";

interface WhatsappIconProps {
  size?: number;
  color?: string;
}

const WhatsappIcon: FC<WhatsappIconProps> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: size ? `${size}px` : "100px",
      height: "auto",
    }}
    viewBox="0 0 19 20"
    fill="none"
  >
    <path
      d="M11.1987 1.12726L10.6586 1.05145C9.03524 0.81706 7.3787 1.04894 5.8821 1.72006C4.3855 2.39119 3.1105 3.4739 2.20573 4.84197C1.24309 6.14968 0.669233 7.70262 0.550205 9.32207C0.431177 10.9415 0.771814 12.5617 1.53292 13.9961C1.61081 14.1398 1.6593 14.2977 1.67557 14.4604C1.69184 14.6231 1.67556 14.7874 1.62768 14.9437C1.23915 16.2799 0.879052 17.6255 0.5 19.0375L0.973815 18.8953C2.25312 18.5542 3.53242 18.213 4.81172 17.9003C5.08174 17.8442 5.3624 17.8706 5.6172 17.9761C6.76497 18.5363 8.01928 18.8445 9.29595 18.88C10.5726 18.9155 11.8421 18.6775 13.0192 18.182C14.1964 17.6865 15.2539 16.9449 16.1208 16.0071C16.9878 15.0692 17.6441 13.9568 18.0457 12.7444C18.4473 11.532 18.585 10.2478 18.4494 8.97781C18.3139 7.70786 17.9082 6.4816 17.2597 5.38132C16.6112 4.28104 15.7349 3.3322 14.6895 2.59848C13.6442 1.86476 12.4539 1.36313 11.1987 1.12726ZM13.5868 13.5602C13.2424 13.8685 12.8224 14.0801 12.3696 14.1733C11.9168 14.2665 11.4474 14.2381 11.0092 14.0908C9.02351 13.5317 7.30078 12.2858 6.14787 10.5751C5.7075 9.97009 5.35348 9.3067 5.096 8.60406C4.95656 8.19636 4.93142 7.75827 5.0233 7.3373C5.11518 6.91633 5.32057 6.52855 5.6172 6.21603C5.76161 6.03173 5.95817 5.89519 6.18128 5.8242C6.4044 5.75321 6.64372 5.75106 6.86807 5.81803C7.0576 5.86541 7.19027 6.14022 7.36084 6.3487C7.49919 6.74007 7.66124 7.12291 7.84413 7.49533C7.98289 7.68534 8.04084 7.92252 8.00533 8.15511C7.96982 8.38769 7.84374 8.59678 7.65461 8.73673C7.22817 9.11578 7.29451 9.4285 7.59775 9.85493C8.26815 10.8207 9.19318 11.5817 10.2701 12.0534C10.5733 12.1861 10.8007 12.2145 10.9997 11.9018C11.085 11.7786 11.1987 11.6744 11.2935 11.5607C11.8431 10.8689 11.6726 10.8784 12.5444 11.2574C12.822 11.374 13.0912 11.5104 13.3499 11.6649C13.6057 11.8165 13.9942 11.9776 14.0511 12.2051C14.1058 12.4518 14.0914 12.7088 14.0095 12.9479C13.9276 13.187 13.7813 13.3988 13.5868 13.5602Z"
      fill={color}
    />
  </svg>
);

export default WhatsappIcon;