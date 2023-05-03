import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Chasers Fresh Juice" }];

export default function AboutPage() {
  return (
    <main>
      <div>About</div>
    </main>
  );
}
