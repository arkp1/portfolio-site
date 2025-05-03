import TechLogos from "@/Utils/techLogos";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center p-4">
       {/* intro */}
      <div>
        <h1 className="text-4xl font-bold text-center text-white">
          Hi, I'm praneet.
        </h1>
        <p className="mt-4 text-lg text-center text-gray-300">
        A junior fullstack developer who's currently focused on Web Development. Other than that, I'm also interested in UX/UI Design. I like to build things that make life easier.
        </p>
      </div>

      {/* tech used */}
      <div>
      <h2 className="text-2xl font-bold text-left text-white mt-8">
          Technologies I use:
        </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
       {TechLogos.map((logo) => {
          return (
            <div key={logo.name} className="flex items-center gap-2 p-2">
              <img src={logo.icon} alt={logo.name} className="w-8 h-8" />
              <span className="text-white">{logo.name}</span>
            </div>
          );
       })}
      </div>
      </div>
      
    </main>
  );
}
