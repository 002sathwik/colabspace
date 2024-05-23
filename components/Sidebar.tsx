"use client";
import React from "react";
import { sidebarlinks } from "./../constants/index";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// Make sure to install and import 'classnames'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarlinks.map((link) => {
          // Check whether the link is active or not
          const isActive =
            pathname === link.route || pathname.startsWith(link.route);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${
                isActive ? "bg-blue-1" : ""
              }`}
            >
              <Image
              src={link.imgUrl} alt={link.label} width={24} height={24}/>
              <p className=" text-lg font-semibold max-lg:hidden font-poetsen-one-regular">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
