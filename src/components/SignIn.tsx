import Link from "next/link";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";
import { AiOutlineFunction } from "react-icons/ai";


const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center items-center">
      
        <AiOutlineFunction className="h-21 w-21 sm:h-16 sm:w-16" />
        <h1 className="text-2xl font-semibold tracking-tight"> Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By contiuning, you are setting up forum flux account and agree to our
          User Agreement and Privacy Policy.
        </p>

        {/* Sign in form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to Forum flux?{" "}
          <Link
            href={"/sign-up"}
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
