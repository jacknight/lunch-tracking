"use client";
import { FormEvent, useState } from "react";
import Link from "./link";

export const Links = ({l}: {l: string[]}) => {
  const [links, setLinks] = useState<string[]>(l);
  const [linkInput, setLinkInput] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (linkInput !== "") {
      const newLinks = [...links, linkInput];
      setLinks(newLinks);
      console.info("Sending links: ", links, linkInput);
      setLinkInput("");
      try {
        fetch("api/links", {method: "post", body: JSON.stringify(newLinks)});
      } catch (e: any) {
        console.error(JSON.stringify(e));
      }
    }
  }

  const removeLink = (link: string) => {
    const newLinks = links.filter(l => l !== link);
    setLinks(newLinks);
    try {
      fetch("api/links", {method: "post", body: JSON.stringify(newLinks)});
    } catch (e: any) {
      console.error(JSON.stringify(e));
    }
  }

  return (
  <div className="flex flex-col gap-2 h-screen w-full p-5">
    <form className="flex gap-2 h-min" onSubmit={handleSubmit}>
      <strong>Enter Tracking Link:</strong>
      <input type="text" className="border-2" value={linkInput} onChange={(event) => setLinkInput(event.currentTarget.value)}/>
      <button type="submit" className="border-2 min-w-10">+</button>
    </form>
    <div className="flex gap-2 w-full h-full">
      {links.map((link) => <Link key={link} link={link} onRemove={() => removeLink(link)} />)}
    </div>
  </div>
  );
}

export default Links;
