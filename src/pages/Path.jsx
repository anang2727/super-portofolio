import { FaStarOfLife } from "react-icons/fa6";
const Path = () => {
  return (
    <>
        <div className="p-5 w-full lg:w-1/2 flex bg-[#F5F7F8] flex-col items-center  lg:rounded-md justify-center text-center mx-auto -my-20  ">
            <div className="flex gap-3 lg:gap-20 items-center justify-between text-[#021526]">
                <p className="text-sm lg:text-2xl">Frontend-Dev</p>
                <FaStarOfLife />
                <p className="text-sm lg:text-2xl">UI/UX</p>
                <FaStarOfLife />
                <p className="text-sm lg:text-2xl">Designer</p>
            </div>
        </div>
    </>
  )
}

export default Path