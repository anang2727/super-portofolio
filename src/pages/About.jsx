import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaYoutube, FaSquareInstagram, FaTiktok } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div 
        id="about" 
        className="p-5 w-full lg:w-1/2 h-screen flex flex-col items-center justify-center text-center mx-auto"
      >
        <div>
          <h1 className="text-4xl font-bold text-[#021526]">About Me</h1>
          <p className="my-3 lg:text-xl">
            I’m Anang Kurniawan 🚀, an Informatics student with 3 years of programming experience. I enjoy exploring programming languages and designing challenging applications📲. Let’s collaborate and build something extraordinary together!😊.
          </p>
          <div className="flex gap-2 lg:gap-10 mt-5 justify-center text-4xl text-[#30475E]">
            <a href="https://www.linkedin.com/in/anang-kurniawan-02a620300/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="border rounded-full p-2 hover:bg-sky-600 hover:text-[#F5F7F8] transition-all"/>
            </a>
            <a href="https://github.com/anang2727" target="_blank" rel="noopener noreferrer">
              <FaGithub className="border rounded-full p-2 hover:bg-sky-600 hover:text-[#F5F7F8] transition-all"/>
            </a>
            <a href="mailto:anangkurniawan2727@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdOutlineEmail className="border rounded-full p-2 hover:bg-sky-600 hover:text-[#F5F7F8] transition-all"/>
            </a>
            <a href="https://www.youtube.com/@anangkurniawan2727/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="border rounded-full p-2 hover:bg-sky-600 hover:text-[#F5F7F8] transition-all"/>
            </a>
            <a href="https://www.instagram.com/anang__k" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram className="border rounded-full p-2 hover:bg-sky-600 hover:text-[#F5F7F8] transition-all"/>
            </a>
            <a href="https://www.tiktok.com/@akaaa.27" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="border rounded-full p-2 hover:bg-sky-600 hover:text-[#F5F7F8] transition-all"/>
            </a>
          </div>
        </div>
      </div>    
    </>
  );
}

export default About;
