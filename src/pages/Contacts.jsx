import { useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Masukkan URL endpoint SheetDB yang sudah Anda dapatkan di sini
    const SHEETDB_API_URL = "https://sheetdb.io/api/v1/kjlf0uae1h2o1"; // ganti `your_sheet_id` dengan ID SheetDB Anda

    try {
      await axios.post(SHEETDB_API_URL, {
        data: formData,
      });
      alert("Data successfully sent!");
      setFormData({ name: "", email: "", message: "" }); // reset form
      console.log("Data to be sent:", formData);
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send data.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="border p-5 bg-white shadow-md rounded-lg">
        <h1 className="text-center lg:text-4xl font-bold text-2xl">Lets work together</h1>
        <div className="mt-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-5 lg:mb-0">
            <img src="/personal.jpg" alt="" className="lg:w-96 w-full" />
          </div>
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent mb-3 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Name"
              type="text"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent mb-3 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Email"
              type="email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="h-44 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="px-3 hover:bg-slate-800 transition-all py-2 border flex gap-2 font-semibold bg-[#021526] text-white rounded-full mt-2 items-center justify-center w-full"
            >
              <span>Send</span>
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
