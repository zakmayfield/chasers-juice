import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
// import { Link } from "@remix-run/react";
// import { useOptionalUser } from "~/utils/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  // const user = useOptionalUser();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="">
        <Link
          to="/join"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
        >
          Sign up
        </Link>
      </div>
      <div className="">
        <Link
          to="/notes"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-yellow-50 sm:px-8"
        >
          Notes
        </Link>
      </div>
      <div className="">
        <Link
          to="/login"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-yellow-50 sm:px-8"
        >
          Log In
        </Link>
      </div>
    </main>
  );
}
