export default async function Page({
  params,
}: {
  params: Promise<{ taskid: string }>;
}) {
  const id = (await params).taskid;
  return <div className="">{id}</div>;
}
