import {SiHtml5 , SiCss3 ,SiJavascript, SiPhp,SiTailwindcss,SiBootstrap,SiCodeigniter,SiMysql,SiXampp ,SiReact,SiFigma,SiAdobexd,SiLaravel,SiAdobeillustrator,SiVisualstudiocode,SiGit  } from "react-icons/si";
const Skills = () => {


  return (
    <>
      <div className="p-5 w-full flex flex-col items-center justify-center my-20 -mt-20 mx-auto">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Kolom Skills */}
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-center">Soft Skills</h3>
              <div className="flex flex-wrap gap-5 border p-10 rounded-lg justify-center bg-[#021526] ">
                <ul className="pl-5 space-y-3  list-disc marker:text-[#F5F7F8] text-[#F5F7F8]">
                  <li>Ability to create user-centered, responsive designs</li>
                  <li>Strong understanding of responsive design principles and techniques</li>
                  <li>Proficiency in front-end development technologies</li>
                  <li>Ability to seamlessly integrate UI and UX</li>
                  <li>Attention to detail and pixel-perfect implementation</li>
                  <li>Passion for creating exceptional user experiences</li>
                </ul>
              </div>
            </div>

            {/* Kolom Tools */}
            <div>
              <h3 className="text-3xl font-semibold mb-3 text-center">Programming & Tools</h3>
              <div className="flex flex-wrap gap-5 border p-10 rounded-lg justify-center lg:text-6xl text-4xl ">
               <SiHtml5 />
               <SiCss3 />
               <SiJavascript />
               <SiPhp />
               <SiTailwindcss />
               <SiBootstrap />
               <SiCodeigniter />
               <SiMysql />
               <SiReact />
               <SiXampp />
               <SiFigma />
               <SiAdobexd />
               <SiLaravel />
               <SiAdobeillustrator />
               <SiVisualstudiocode />
               <SiGit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
