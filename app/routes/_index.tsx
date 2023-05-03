import type { V2_MetaFunction } from "@remix-run/node";
import HomePage from "~/features/home/HomePage";

export const meta: V2_MetaFunction = () => [{ title: "Chasers Fresh Juice" }];

export default function Index() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
