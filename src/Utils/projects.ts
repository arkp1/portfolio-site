type Project = {
  name: string;
  description: string;
  url: string;
  stack: string[];
  image?: string;
};

const MyProjects: Project[] = [
  {
    name: "Recomposer - Cache-Based Recommendation System",
    description:
      "A Netflix style recommendation system with cache-driven architecture.",
    url: "https://github.com/arkp1/recomposer",
    stack: ["Python", "Docker", "Grafana", "Prometheus"],
    image: "/images/recomposer.png",
  },
  {
    name: "HTTP-Server",
    description: "A custom made HTTP server implemented in C++ using raw sockets.",
    url: "https://github.com/arkp1/http-server",
    stack: ["C++", "TCP/IP", "Docker"],
    image: "/images/http-server.png",
  },
  {
    name: "Image Compressor",
    description: "A sleek image compressor with custom quality input. Reduce your file size, control their quality, and enjoy a beautiful UI.",
    url: "https://compressit-puce.vercel.app/",
    stack: ["Typescript", "Python", "Next.js", "Tailwind CSS"],
    image: "/images/compressit.png",
  },
  {
    name: "Movie Time",
    description:
      "A full stack movie application with auth, sync, watchlist support and more.",
    url: "https://movie-time-zfid.onrender.com/",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/images/movietime.png",
  },
];

export default MyProjects;
