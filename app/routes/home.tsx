import type { Route } from "./+types/home";
import Inventory from "../src/pages/inventory/inventory"


export function meta() {
  return [
    { title: "My Cellphone Store" },
    {
      tagName: "link",
      rel: "icon",
      href: "/favicon.ico"
    }
  ];
}


export default function Home() {
  return <Inventory />;
}
