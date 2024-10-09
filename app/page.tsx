import Links from "./links";

export const Home = async () => {
  const links = await getLinks();
  console.info("Links: ", links);
  return (
    <div className="flex gap-5 w-screen h-screen">
      <div className="flex flex-col gap-2 h-screen w-screen p-5">
        <Links l={links} />
      </div>
    </div>
  );
}

export const getLinks = (async () => {
  try {
    console.info("Getting links...");
    const res: {success: boolean, links: string[]} = await (await fetch(`${process.env.VERCEL_URL || "http://localhost:3000"}/api/links`, {cache: "no-store"})).json();
    if (res.success)
      return res.links;
    return [];
  } catch (e: any) {
    console.error("Error: ", e);
    return [];
  }
})

export default Home;
