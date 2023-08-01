import LogoImage from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-5 cursor-pointer">
      <Image height={100} src={LogoImage} alt="Coretext logo" priority/>
    </Link>
  );
};

export default Logo;
