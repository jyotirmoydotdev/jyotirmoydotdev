import Image, { StaticImageData } from "next/image";

interface ProflieCardType {
  pic: StaticImageData;
  name: string;
  email: string;
  subtitle: string;
  className: string;
}

const ProflieCard = (data: ProflieCardType) => {
  return (
    <div className={data.className}>
      <div className="flex flex-row rounded-xl bg-gray-200/50 dark:bg-gray-500/50 hover:bg-gray-200/60 hover:dark:bg-gray-500/60 p-4 overflow-hidden h-full items-center">
        <Image src={data.pic} placeholder="blur" alt="Jyotirmoy Barman" height={100} width={100} className="object-cover size-24 aspect-square rounded-full bg-gray-500" />
        <div className="flex flex-col gap-1 px-4 py-2">
          <div className="font-bold">{data.name}</div>
          <div className="text-gray-700 dark:text-gray-300 text-sm font-medium line-clamp-1">{data.email}</div>
          <div className="text-gray-700 dark:text-gray-300 text-sm font-medium line-clamp-1">{data.subtitle}</div>
        </div>
      </div>
    </div>
  )
}

export default ProflieCard;
