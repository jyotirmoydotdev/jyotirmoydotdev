const GraphCard = (props: { className: string }) => {
  return (
    <div className={props.className}>
      <div className=" p-4 rounded-xl bg-gray-200/50 dark:bg-gray-500/50 ">
        <div className="overflow-scroll no-scrollbar ">
          <table className=" p-4 rounded-lg overflow-hidden">
            <tbody className=" ">
              {
                Array.from({ length: 7 }).map((_, index) => (
                  <tr key={index} className="flex flex-row gap-0.5 mb-0.5">
                    {
                      Array.from({ length: 52 }).map((_, index) => (
                        <td key={index} className="size-[14px] bg-gray-50 dark:bg-[#2B313B] flex-col rounded-[3px]"></td>
                      ))
                    }
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
