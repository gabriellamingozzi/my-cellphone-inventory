import type { Route } from "./+types/home";
import Inventory from "../src/pages/inventory/inventory"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Cellphone Store" }
  ];
}

export default function Home() {
  return <Inventory />;
}
