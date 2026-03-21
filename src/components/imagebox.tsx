import Image from "next/image";

export const ImageBox = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className=" rounded-md p-1 bg-gray-200/50 dark:bg-gray-500/50 flex flex-col justify-center items-center">
      <Image
        src={src}
        width={100}
        height={100}
        alt={title}
        className="aspect-square size-24 m-0"
      />
      <div className="text-sm">{title}</div>
    </div>
  );
};
