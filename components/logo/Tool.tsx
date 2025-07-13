import Image from "next/image";

const Tool = ({ src, alt }: { src: string; alt: string }) => {
  return (
   <div
        title={alt}
        className="w-[100px] h-[100px] relative bg-white shadow-lg rounded-full overflow-hidden hover:scale-120 transition-transform duration-300"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-full object-cover p-1"
        />
      </div>
  );
};
export default Tool;
