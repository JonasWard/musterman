import Image from "next/image";

/** Same asset as `app/icon.svg` (favicon). Next serves it at `/icon.svg`. */
import iconSrc from '@/app/icon-dynamic.svg';

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src={iconSrc}
      alt="Musterman logo"
      width={size}
      height={size}
      priority
      className="select-none shrink-0"
    />
  );
}
