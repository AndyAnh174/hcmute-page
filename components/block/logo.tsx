import Image from "next/image";

const BANNER_LOGO = "/logo/banner.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      src={BANNER_LOGO}
      alt="HCMUTE Logo"
      width={200}
      height={56}
      className={className}
    />
  );
};

export default Logo;

