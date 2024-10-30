
const Contacts = () => {
  return (
    <>
       <div className="flex justify-center items-center w-full h-screen">
  <div className="border p-5 bg-white shadow-md rounded-lg">
    <h1 className="text-center lg:text-3xl font-bold text-2xl">Lets work together</h1>
    <div className="mt-10 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-5 lg:mb-0">
        <img src="/personal.jpg" alt="" className="lg:w-96 w-full" />
      </div>
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          className="w-full bg-transparent mb-3 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Name"
          type="text"
        />
        <input
          className="w-full bg-transparent mb-3 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Email"
          type="email"
        />
        <textarea
          placeholder="Message"
          className="h-44 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        ></textarea>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contacts