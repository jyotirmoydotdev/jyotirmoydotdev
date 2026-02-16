"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react";

const daytodate = (day: number): string => {
  const year = new Date().getFullYear();
  const isLeapYear =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const maxDays = isLeapYear ? 366 : 365;

  if (day < 1 || day > maxDays) {
    return (``);
  }

  const date = new Date(year, 0);
  date.setDate(day);

  const month = date.toLocaleString("default", { month: "long" });
  const dayOfMonth = date.getDate();

  const getOrdinal = (n: number): string => {
    if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
    switch (n % 10) {
      case 1: return `${n}st`;
      case 2: return `${n}nd`;
      case 3: return `${n}rd`;
      default: return `${n}th`;
    }
  };

  return `${month} ${getOrdinal(dayOfMonth)}`;
};
const createEmptyGrid = () => {
  return Array.from({ length: 53 }, () =>
    Array.from({ length: 7 }, () => ({
      day: "",
      n: 0,
    }))
  );
};

const GraphCard = (props: { className: string }) => {
  function colour(n: number): string {
    if (n <= 0) {
      return "bg-[#f9fafb] dark:bg-[#2B313B]"
    } else if (n > 0 && n <= 2) {
      return "bg-[#aceebb] dark:bg-[#1b4721]"
    } else if (n > 2 && n <= 4) {
      return "bg-[#4ac26c] dark:bg-[#2b6a30]"
    } else if (n > 4 && n <= 8) {
      return "bg-[#2da44e] dark:bg-[#46954a]"
    } else if (n > 8) {
      return "bg-[#11632a] dark:bg-[#6bc46c]"
    } else {
      return "bg-[#f9fafb] dark:bg-[#2B313B]"
    }
  }

  const [gridData, setGridData] = useState<{ day: string; n: number }[][]>(createEmptyGrid);
  const [isloading, setisloading] = useState(false)

  useEffect(() => {
    setisloading(true)
    let num = 0;

    const grid = Array.from({ length: 53 }, () =>
      Array.from({ length: 7 }, () => {
        num++;
        return {
          day: daytodate(num),
          n: num > 365 ? 0 : Math.floor(Math.random() * 16),
        };
      })
    );
    setisloading(false)
    setGridData(grid);
  }, []);

  return (
    <div className={props.className}>
      <div className=" p-4 rounded-xl bg-gray-200/50 dark:bg-gray-500/50 ">
        <div className="overflow-scroll no-scrollbar ">
          <table className=" p-4 rounded-lg overflow-hidden">
            <tbody>
              {Array.from({ length: 7 }).map((_, rowIndex) => (
                <tr key={rowIndex} className="flex flex-row gap-0.5 mb-0.5">
                  {gridData.map((col, colIndex) => (
                    <Tooltip key={colIndex}>
                      <TooltipTrigger asChild>
                        <td
                          className={`size-[14px] rounded-[3px] ${isloading && "animate-pulse"} ${colour(col[rowIndex].n)}`}
                        />
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
                        {col[rowIndex].n} activity on {col[rowIndex].day}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default GraphCard;
