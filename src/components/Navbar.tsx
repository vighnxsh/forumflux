import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { UserAccountNav } from "./UserAccountNav";
import SearchBar from "./SearchBar";
import { SiFluxus } from "react-icons/si";
import { AiOutlineFunction } from "react-icons/ai";



const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit  border-zinc-400 z-[10] py-2 backdrop-blur-md">
      <div className="container max-w-7xl h-full mx-auto ml-0 flex items-center justify-between gap-2 ">
        {/* logo */}
        <Link href={"/"} className="flex gap-2 items-center text-4xl font-bold text-emerald-100 font-mono lg:text-5xl  ">
        <AiOutlineFunction />


          {/* <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" /> */}
          <p className="hidden text-emerald-200 text-xl font-medium md:block ">
            Flux
          </p>
        </Link>

        {/* Search Bar */}
        <SearchBar />

        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href={"/sign-in"} className={buttonVariants({ variant: "custom3" })}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
