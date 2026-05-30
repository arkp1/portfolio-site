type Project = {
  name: string;
  description: string;
  url: string;
  stack: string[];
  image?: string;
};

const MyProjects: Project[] = [
    {
    name: "RevPlay - Music Player",
    description:
      "A full-stack music streaming web application built with Spring Boot, Thymeleaf, and MySQL - supporting songs, albums, podcasts, playlists, and artist analytics in a unified platform.",
    url: "https://github.com/arkp1/RevPlay-P2",
    stack: ["Java, Spring Boot, Hibernate, MySQL"],
    image: "/images/Revplay_home_page.png",
  },
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
];

export default MyProjects;
