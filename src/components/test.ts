// import { getAuthSession } from "@/lib/auth";
// import {db} from '../lib/db'


// export default async function test() {
  
    
// const session = await getAuthSession();
  
// const followedCommunities = await db.subscription.findMany({
//     where: {
//       userId: session?.user.id,
//     },
//     include: {
//       subreddit: true,
//     },
//   }
//   );
  
//   const coms = await db.subreddit.findMany({
//   where: {

//     subs
//     // subreddit: {
//     //   name: {
//     //     in: followedCommunities.map(({ subreddit }) => subreddit.id),
//     //   },
//     // },
//   },
//   orderBy: {
//     createdAt: "desc",
//   },
//   include: {
//     votes: true,
//     author: true,
//     comments: true,
//     subreddit: true,
//   },
//   });
//   return 
  
  
// }








