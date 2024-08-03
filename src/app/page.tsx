import CustomFeed from "@/components/CustomFeed";
import GeneralFeed from "@/components/GeneralFeed";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/Textgenerationeffect";
import './page.css'
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { db } from "@/lib/db";
import { Divide } from "lucide-react";
import SignIn from "@/components/SignIn";


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";



export default async function Home() {
  const session = await getAuthSession();
 
  return (
    <>
    {session ?     <p className=" text-transparent bg-clip-text z-10 text text-5xl bg-gradient-to-r from-violet-100 via-emerald-200  to-indigo-700 font-bold">Your feed ~</p>
: <p className="text text-transparent bg-clip-text z-10  text-3xl bg-gradient-to-r from-violet-100 via-emerald-200  to-indigo-700 font-bold">Sign in for customized feed~</p>}
     
      <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
      
  {/* @ts-expect-error server component */}
  {session ? <><CustomFeed /></> : <GeneralFeed />}
 <div> </div> 
    </div>



    
   
    
    </>
  );
}
