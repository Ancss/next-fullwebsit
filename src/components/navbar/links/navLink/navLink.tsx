"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import { LinkItem } from '../Links'
const NavLink = ({ item }:{item:LinkItem}) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`"container rounded-lg text-center font-medium text-white bg-[var(--text)]" ${pathName === item.path && styles.active
        }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
