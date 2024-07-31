

# **Forum Flux**

A dynamic forum platform built with modern web technologies. Users can create communities, share posts, and engage through voting and commenting. The application leverages Next.js for efficient rendering, Prisma for robust database management, Redis for caching, and Tailwind CSS for a sleek, responsive design. Developed in TypeScript, it offers full CRUD functionality, ensuring a seamless and interactive user experience.

 Steps to set this up locally
 
 

    git clone https://github.com/vighnxsh/forumflux

Navigate and open the repository in terminal

    npm install

## **Add environment variables**

  
 for Database go to aiven.io and boot up a mysql database or any other mysql provider of your choice.
 
 ***OR***

Spin up a docker container.



    GOOGLE_CLIENT_ID
    GOOGLE_CLIENT_SECRET

**For these variables go to cloud.google.com**

other important links for env variables


> https://uploadthing.com/
> 
> https://upstash.com/

 

   
   After setting up env variables 

run 

    npx prisma migrate dev


 Add some seed data if you want to 

finally run

    npm run dev


