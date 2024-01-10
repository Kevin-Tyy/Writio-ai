import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/logo/writio.svg" alt="writio" height={40} width={100} />
      </Link>
    </div>
  );
}
