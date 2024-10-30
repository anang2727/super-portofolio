import { FaInstagram,FaYoutube,FaLinkedin,FaDiscord,FaTelegram } from "react-icons/fa6";
const InfoApp = () => {
  return (
    <>
        <div className="flex flex-col gap-4 my-20 justify-center py-2 rounded-sm">
            <div className="flex gap-2 text-4xl justify-around">
                <FaLinkedin />
                <FaInstagram />
                <FaYoutube />
                <FaDiscord />
                <FaTelegram />
            </div>
        </div>
    </>
  )
}

export default InfoApp