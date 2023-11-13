"use client";

import Link from "next/link";
import {
  GoHome,
  GoGear,
  GoQuote,
  GoTasklist,
  GoDiscussionClosed,
  GoCodeOfConduct,
} from "react-icons/go";
import { motion, useCycle } from "framer-motion";

export function SidePanel({
  themeData,
}: {
  themeData: Record<
    string,
    {
      hex: string;
    }
  >;
}) {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.nav
      animate={{ width: open ? "10rem" : "3.5rem" }}
      style={{
        backgroundColor: themeData.tertiaryAccent?.hex,
        color: themeData.tertiaryText?.hex,
      }}
      className="flex flex-col fixed h-screen-view z-10"
      onMouseEnter={() => cycleOpen()}
      onMouseLeave={() => cycleOpen()}
    >
      <Link className="m-2 flex items-center" href="/admin">
        <div className="items-center text-4xl">
          <GoHome />
        </div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className={open ? "mx-2 block" : "hidden"}
        >
          Home
        </motion.div>
      </Link>
      <Link className="m-2 flex items-center" href="/admin/services">
        <div className="text-4xl">
          <GoTasklist />
        </div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className={open ? "mx-2 block" : "hidden"}
        >
          Services
        </motion.div>
      </Link>
      <Link className="m-2 flex items-center" href="/admin/blog">
        <div className="text-4xl">
          <GoQuote />
        </div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className={open ? "mx-2 block" : "hidden"}
        >
          Blog
        </motion.div>
      </Link>
      <Link className="m-2 flex items-center" href="/admin/testimonials">
        <div className="text-4xl">
          <GoDiscussionClosed />
        </div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className={open ? "mx-2 block" : "hidden"}
        >
          Testimonals
        </motion.div>
      </Link>
      <Link className="m-2 flex items-center" href="/admin/faqs">
        <div className="text-4xl">
          <GoCodeOfConduct />
        </div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className={open ? "mx-2 block" : "hidden"}
        >
          Faqs
        </motion.div>
      </Link>
      <div className="flex-grow"> </div>
      <Link className="m-2 flex items-center" href="/admin/settings">
        <div className="text-4xl">
          <GoGear />
        </div>
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          className={open ? "mx-2 block" : "hidden"}
        >
          Settings
        </motion.div>
      </Link>
    </motion.nav>
  );
}
