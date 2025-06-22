"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/app/constants/navItems";
import useMemberInfoStore from "@/app/store/memberInfoStore";

const Header = () => {
  const { memberNickName } = useMemberInfoStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white">
      <div className="relative flex items-start justify-between px-10 py-4">
        <Link href="/">
          <Image
            width={160}
            height={50}
            src="/header_logo.png"
            alt="대명산업 로고"
          />
        </Link>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        >
          <div className="flex cursor-pointer items-start justify-between gap-6">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="w-[120px] rounded-xl px-4 py-2 text-center font-semibold whitespace-nowrap transition-colors duration-200 hover:bg-gray-100">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {isHovered && (
            <div className="absolute top-full left-0 flex w-full justify-center gap-10 rounded bg-white px-2 py-10 shadow-lg">
              {navItems.map((item) => (
                <ul key={item.label} className="flex w-[120px] flex-col gap-6">
                  {item.children.map((child) => (
                    <Link
                      href={child.href}
                      key={child.label}
                      className="hover:bg-light-green rounded-xl p-2 text-center whitespace-nowrap"
                    >
                      {child.label}
                    </Link>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hover:bg-primary-green rounded-xl bg-gray-100 px-3 py-2 text-center whitespace-nowrap transition-colors duration-200 hover:text-white"
          >
            문의하기
          </Link>
          <Link
            href="/login"
            className="hover:bg-primary-green rounded-xl bg-gray-100 px-3 py-2 text-center whitespace-nowrap transition-colors duration-200 hover:text-white"
          >
            {memberNickName ? (
              <p>
                <b className="text-primary-green font-extrabold">
                  {memberNickName}
                </b>
                님 안녕하세요!
              </p>
            ) : (
              <p>로그인</p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
