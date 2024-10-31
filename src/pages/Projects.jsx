import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiTailwindcss, SiBootstrap, SiCodeigniter, SiMysql, SiXampp, SiReact, SiFigma, SiAdobexd, SiLaravel, SiAdobeillustrator, SiVisualstudiocode, SiGit } from "react-icons/si";

const Projects = () => {
  const cardContent = [
    {
      title: "Landing Page Of Hajji",
      imgSrc: "hajji-lp.svg",
      technologies: [SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiVisualstudiocode], 
      linkDemo : "https://haji-umrah.vercel.app/"
    },
    {
      title: "Chatbot Rule-based",
      imgSrc: "https://i.pinimg.com/564x/37/08/99/3708994bdca38cd8dbea509f233f3cf4.jpg",
      technologies: [SiPhp, SiCodeigniter, SiMysql, SiXampp, SiGit], // Same here
    },
    {
      title: "Web APP Dayah Annabawi",
      imgSrc: "https://i.pinimg.com/564x/37/08/99/3708994bdca38cd8dbea509f233f3cf4.jpg",
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
                <a target="_blank" href={card.linkDemo} className="mt-4 rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
