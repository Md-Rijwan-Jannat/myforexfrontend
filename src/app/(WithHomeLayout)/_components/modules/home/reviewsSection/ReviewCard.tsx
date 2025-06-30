import React from "react";
import { FaXTwitter } from "react-icons/fa6";

interface ReviewCardProps {
  name?: string;
  role?: string;
  reviews?: string;
  icon?: React.ReactNode;
}

export default function ReviewCard({
  name = "John Appleseed",
  role = "Founder & CEO",
  reviews = "It is a long established fact that a reader will be distracted by the readable content of a page.",
  icon = <FaXTwitter className="text-white/70" />,
}: ReviewCardProps) {
  return (
    <div className="reviews-card-shadow bg-[#141517]/20 rounded-[14px] p-9 flex flex-col items-start space-y-8 max-h-[240px] h-full">
      <h3>
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3357 0.439998V2.44H11.1757C10.2157 2.44 9.73569 2.92 9.73569 3.88V5.16H10.2957C11.069 5.16 11.709 5.4 12.2157 5.88C12.749 6.36 13.0157 6.96 13.0157 7.68C13.0157 8.45333 12.749 9.08 12.2157 9.56C11.709 10.04 11.069 10.28 10.2957 10.28C9.52236 10.28 8.88236 10.0267 8.37569 9.52C7.86903 9.01333 7.61569 8.37333 7.61569 7.6V3.88C7.61569 1.58667 8.76236 0.439998 11.0557 0.439998H12.3357ZM5.37569 0.439998V2.44H4.21569C3.25569 2.44 2.77569 2.92 2.77569 3.88V5.16H3.33569C4.10903 5.16 4.74903 5.4 5.25569 5.88C5.78903 6.36 6.05569 6.96 6.05569 7.68C6.05569 8.45333 5.78903 9.08 5.25569 9.56C4.74903 10.04 4.10903 10.28 3.33569 10.28C2.56236 10.28 1.92236 10.0267 1.41569 9.52C0.909027 9.01333 0.655693 8.37333 0.655693 7.6V3.88C0.655693 1.58667 1.80236 0.439998 4.09569 0.439998H5.37569Z"
            fill="white"
          />
        </svg>
      </h3>
      <p className="text-[14px] leading-[20px] text-white/70 tracking-wide">
        {reviews}
      </p>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-start flex-col space-y-1">
          <h2 className="text-[15px] font-semibold leading-[15px] text-white">
            {name}
          </h2>
          <span className="text-[14px] font-normal text-white/70 tracking-wide">
            {role}
          </span>
        </div>
        <div className="reviews-card-shadow rounded-[10px] p-1 size-10 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}
