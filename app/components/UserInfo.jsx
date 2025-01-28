import React from "react";
import Image from "next/image"; // Use Next.js Image for optimized images

function UserInfo({ userInfo }) {
    console.log("Received userInfo in UserInfo component:", userInfo); // Debug log

    return (
        <div className="flex flex-col items-center">
            {/* Safely access userInfo properties */}
            <Image
                src={userInfo?.userImage || "/placeholder.png"} // Fallback image
                alt="User Profile"
                width={100}
                height={100}
                className="rounded-full"
            />
            <h2 className="text-[30px] font-semibold">
                {userInfo.userName}
            </h2>
            <h2 className="text-gray-400">
                {userInfo.email}
            </h2>

            <button   className="bg-gray-200 p-2 px-3 font-semibold mt-5    rounded-full text-black">Share</button>
        </div>
    );
}

export default UserInfo;
