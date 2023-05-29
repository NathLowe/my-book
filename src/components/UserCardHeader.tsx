import Image from "next/image";
import React from "react";
import { headerFont } from "@/datas/fonts";
import { randomImage } from "@/datas/functions";
import { Maybe } from "@/datas/types";

// Normally we should add the user image to the prop but our actual database ain't got none
export default function UserCardHeader({
  withUser,
  title,
  username,
}: {
  withUser?: boolean;
  title?: Maybe<string>;
  username?: Maybe<string>;
}) {
  let showUser = withUser === undefined ? true : withUser;
  return (
    <div className="bg-gray-50 px-4 py-1.5 flex items-center gap-x-4 dark:bg-gray-700 dark:text-white">
      {showUser && (
        <Image
          className="w-10 h-10 rounded-full"
          src={randomImage()}
          alt={username ? username : "Random User"}
          width={100}
          height={100}
        />
      )}
      <div>
        <h3
          className={`line-clamp-1 text-lg font-semibold tracking-tight ${headerFont.className}`}
        >
          {" "}
          {title}{" "}
        </h3>
        {showUser && (
          <small className="text-disabled font-light block -mt-1">
            {" "}
            {username}{" "}
          </small>
        )}
      </div>
    </div>
  );
}
