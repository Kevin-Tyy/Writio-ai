import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <div data-hide-on-theme="dark" className="hidden dark:block">
          <Image src="/logo/writio.svg" alt="writio" height={40} width={100} />
        </div>
        <div data-hide-on-theme="light" className="block dark:hidden">
          <Image src="/logo/writio-light.svg" alt="writio" height={40} width={100} />
        </div>
      </Link>
    </div>
  );
}
