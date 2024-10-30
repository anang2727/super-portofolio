import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {/* Background Animation */}
      <ul className="background absolute inset-0 -z-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>

      {/* Main Content */}
      <div className="flex justify-center items-center h-full relative z-10">
        <div>
          <div className="flex flex-col items-center gap-2">
            <img src="profil.jpg" alt="profile" className="w-36 lg:w-44 rounded-full"/>
            <span className="text-xs text-[#021526] bg-green-100 px-2 my-3 rounded-full">
              • Available For Work  
            </span>
          </div>
          <div className="flex mt-5 flex-col gap-1 items-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#F5F7F8]">Anang Kurniawan</h1>
            <p className="text-xl italic text-slate-400 lg:text-2xl">• Frontend Developer •</p> 
            <span className="text-sm text-[#F5F7F8] lg:text-lg">Code | Coffee | Repeat</span>
          </div>
          <div className="flex gap-3 items-center justify-center mt-2">
            <button className="px-3 py-1 bg-[#F5F7F8] rounded-full text-[#021526] text-sm">CV</button>
            <button className="outline-none transition flex items-center gap-1 px-3 py-1 border hover:text-[#021526] hover:bg-[#F5F7F8] border-[#F5F7F8] rounded-full text-sm text-[#F5F7F8]">
              <span>Let s Talk</span>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
