type Project = {
  name: string;
  description: string;
  url: string;
  stack: string[];
};

const MyProjects: Project[] = [
  {
    name: "Recomposer - Cache-Based Recommendation System",
    description: "A Netflix style recommendation system with cache-driven architecture.",
    url: "https://github.com/arkp1/recomposer",
    stack: ["Python", "Docker", "Grafana", "Prometheus"],
  },
  {
    name: "HTTP-Server",
    description: "A custom made HTTP server built from scratch using C++.",
    url: "https://github.com/arkp1/http-server",
    stack: ["C++", "TCP/IP", "Docker"],
  },
  {
    name: "Image Compressor",
    description: "A sleek image compressor with custom quality input.",
    url: "https://compressit-puce.vercel.app/",
    stack: ["Typescript", "Python", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Movie Time",
    description:
      "A full stack movie application with auth, sync, watchlist support and more.",
    url: "https://movie-time-zfid.onrender.com/",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

export default MyProjects;
