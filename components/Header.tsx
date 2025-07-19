"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import useMemberInfoStore from "@/store/memberInfoStore";
import { navItems } from "@/constants/navItems";

const Header = () => {
  const { memberNickName } = useMemberInfoStore();
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white/70">
      <div className="relative flex items-center justify-between px-4 py-3 md:px-10 md:py-4">
        <Link href="/">
          <Image
            width={140}
            height={40}
            src="/header_logo.png"
            alt="대명산업 로고"
          />
        </Link>

        {/* 데스크탑 전용 메뉴 */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden md:absolute md:top-1/2 md:left-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:flex-col md:items-center"
        >
          <div className="flex cursor-pointer items-start justify-between gap-2 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.children[0].href}
                className="block w-[120px] rounded-xl px-4 py-2 text-center font-semibold whitespace-nowrap transition-colors duration-200 hover:bg-gray-100"
              >
                {item.label}
              </Link>
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

        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* 데스크탑 전용 우측 메뉴 */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="hover:bg-primary-green rounded-xl bg-gray-100 px-3 py-2 text-center whitespace-nowrap transition-colors duration-200 hover:text-white"
          >
            문의하기
          </Link>
          {memberNickName ? (
            <Link
              href="/my-page"
              className="group hover:bg-primary-green rounded-xl bg-gray-100 px-3 py-2 text-center whitespace-nowrap transition-colors duration-200 hover:text-white"
            >
              <p>
                <b className="text-primary-green font-extrabold group-hover:text-white">
                  {memberNickName}
                </b>
                님 안녕하세요!
              </p>
            </Link>
          ) : (
            <Link
              href="/login"
              className="group hover:bg-primary-green rounded-xl bg-gray-100 px-3 py-2 text-center whitespace-nowrap transition-colors duration-200 hover:text-white"
            >
              로그인
            </Link>
          )}
          {memberNickName && (
            <Link href="/cart">
              <Image
                width={24}
                height={24}
                src="/icon/cart_icon.svg"
                alt="장바구니 이미지"
              />
            </Link>
          )}
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-4 bg-white px-4 py-6 shadow md:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <p className="mb-2 font-semibold">{item.label}</p>
              <ul className="flex flex-col gap-2 pl-2">
                {item.children.map((child) => (
                  <Link
                    href={child.href}
                    key={child.label}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-primary-green text-sm text-gray-700"
                  >
                    {child.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:bg-primary-green rounded-md bg-gray-100 px-4 py-2 text-center hover:text-white"
            >
              문의하기
            </Link>
            {memberNickName ? (
              <Link
                href="/my-page"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-primary-green rounded-md bg-gray-100 px-4 py-2 text-center hover:text-white"
              >
                <b className="text-primary-green">{memberNickName}</b>님
                안녕하세요!
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-primary-green rounded-md bg-gray-100 px-4 py-2 text-center hover:text-white"
              >
                로그인
              </Link>
            )}
            {memberNickName && (
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center"
              >
                <Image
                  width={24}
                  height={24}
                  src="/icon/cart_icon.svg"
                  alt="장바구니 이미지"
                  className="mx-auto"
                />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
