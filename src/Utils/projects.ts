type Project = {
  name: string,
  description: string,
  url: string
  stack: string[]
}

const MyProjects: Project[] = [
    {
    name: "HTTP-Server",
    description: "A custom made HTTP server built from scratch using C++.",
    url: "https://github.com/arkp1/http-server",
    stack: ["C++", "TCP/IP", "Docker"] 
    },
    {
    name: "Image Compressor",
    description: "A sleek image compressor with custom quality input.",
    url: "https://compressit-puce.vercel.app/",
    stack: ["Typescript", "Python", "Next.js", "Tailwind CSS"],
},
{
    name: "Movie Time",
    description: "A full stack movie application with auth, sync, watchlist support and more.",
    url: "https://movie-time-zfid.onrender.com/",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
},
{
    name: "My Chef - AI powered recipe generator",
    description: "An app that generates a recipe based on the ingredients you add. Uses Mistral AI.",
    url: "https://my-chef-web.netlify.app/",
    stack: ["Mistral API", "React.js", "Tailwind CSS"]
},
]

export default MyProjects;