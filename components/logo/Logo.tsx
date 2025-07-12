import Image from "next/image";

const Logo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-[100px] h-[100px] relative bg-white shadow-2xl rounded-full border-4 border-black">
      <Image src={src} alt={alt} fill className="rounded-full object-cover p-1"/>
    </div>
  );
};
export default Logo;
