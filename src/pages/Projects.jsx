import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiTailwindcss, SiBootstrap, SiCodeigniter, SiMysql, SiXampp, SiReact, SiFigma, SiAdobexd, SiLaravel, SiAdobeillustrator, SiVisualstudiocode, SiGit } from "react-icons/si";

const Projects = () => {
  const cardContent = [
    {
      title: "Landing Page Of Hajji",
      imgSrc: "https://plus.unsplash.com/premium_photo-1728417200791-9fc668066747?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiVisualstudiocode], // Use the component references without JSX
    },
    {
      title: "Chatbot Rule-based",
      imgSrc: "https://images.unsplash.com/photo-1729903277277-9c670047ce7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [SiPhp, SiCodeigniter, SiMysql, SiXampp, SiGit], // Same here
    },
    {
      title: "Web APP Dayah Annabawi",
      imgSrc: "https://plus.unsplash.com/premium_photo-1704497002984-c7d360f86cc0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [SiReact, SiFigma, SiAdobexd, SiLaravel, SiAdobeillustrator], // And here
    },
  ];

  return (
    <>
      <div className="p-5 h-full w-full flex flex-col items-center justify-center my-44 mx-auto">
        <h1 className="text-3xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
              style={{ height: "350px" }}
            >
              <div className="w-full h-48 flex-shrink-0 overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h2 className="text-lg font-semibold mb-2 text-start">{card.title}</h2>
                <div className="flex gap-3 text-xs">
                  {card.technologies.map((TechIcon, idx) => (
                    <TechIcon key={idx} className="text-lg" /> // Use the component as a JSX element
                  ))}
                </div>
                <button className="mt-4 rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
