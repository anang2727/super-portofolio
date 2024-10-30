const Experience = () => {
    const items = [
      { title: "Research and Development", office:"Bircode Community" , date: "Oct 2024 - Now ", description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.", active: true },
      { title: "Data Entry", office:"Kantor Pertanahan Kab.Bireuen" ,date: "Agust - Oct 2024", description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.", active: false },
      { title: "Freelance",  date: "2023 -  Now", description: "Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.", active: true },
    ];
  
    return (
      <div className="p-5 w-full lg:w-1/2 flex flex-col items-center h-screen lg:rounded-md justify-center mx-auto my-20">
          <h1 className="text-4xl font-bold text-[#021526]">Work Experience</h1>
        <div className="space-y-8 relative before:absolute my-10 before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${item.active ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-slate-500'} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                  <path fillRule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-lg text-slate-900">{item.title}</div>
                  <time className="font-caveat font-medium text-xs text-indigo-500">{item.date}</time>
                </div>
                  <div className="font-semibold">{item.office}</div>
                <div className="text-slate-500 text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Experience;
