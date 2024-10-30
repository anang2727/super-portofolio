import { SiBuymeacoffee } from "react-icons/si";
const Navbar = () => {
  return (
    <>
        <div className=" fixed p-5 w-full lg:w-1/2 lg:mx-auto lg:left-1/2 lg:-translate-x-1/2 z-20">
            <div className="flex shadow border bg-[#F5F7F8] p-3  justify-between rounded-md items-center ">
                <div className="flex gap-1">
                    <span className="text-xs border border-[#021526] rounded-full px-2 p-1 bg-[#021526] text-white hover:bg-[#F5F7F8] hover:text-[#021526] transition-all cursor-pointer">Aceh</span>
                    <span className="text-xs border border-[#021526] rounded-full px-2 p-1 bg-white">ID</span>
                </div>
                <a href="https://www.buymeacoffee.com/anangkurniawan2727" className="text-xl border border-none p-1 outline-none">
                    <SiBuymeacoffee />
                </a>
            </div>
        </div>
    </>
  )
}

export default Navbar