import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = { name, mobile };
    const response = await fetch("http://localhost:3000/api/feedbacks", {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setMobile("");
      setError(null);
      console.log("new feedback added", json);
    }
  };
  return (
    <>
      {/* <div>
        {feedbacks && feedbacks.map((feedback) => <p>{feedback.title}</p>)}
      </div> */}

      <div className="flex justify-center items-center h-screen md:h-full sm:h-full lg:h-full xl:h-full">
        <div className="sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/2 h-full sm:mt-[5%] md:mt-[5%] lg:mt-[7%] xs:flex xs:flex-col xs:mx-auto xs:w-full xs:justify-center xs:space-y-4 xs:md:pl-0 xs:backdrop-blur-none xs:rounded-lg ">
          <div className="p-4 flex flex-col flex-1 space-y-4 md:pl-0 backdrop-blur-none bg-custom-lightgray rounded-lg">
            <div className="flex flex-col mt-8 text-left ml-[7%]">
              <label className="text-3xl font-bold font-fredoka text-brand-dark text-gray-600 md:text-3xl">
                Feedback Form
              </label>
              <label className="text-lg mt-6 font-sans text-brand-dark md:text-lg">
                First, please share your details
              </label>
            </div>
            <form
              className="flex flex-col p-4 md:ml-2 text-center"
              onSubmit={handleSubmit}
            >
              <div className="relative w-full gap-2 mt-0 sm:w-4/5 md:w-11/12">
                <input
                  className="w-11/12 pr-8 mb-4 border-1 border-b bg-custom-lightgray border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-brand-accent active:border-brand-accent focus:outline-none"
                  placeholder="FULL NAME"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="w-11/12 pr-8 mb-0 border-1 border-b bg-custom-lightgray border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-brand-accent active:border-brand-accent focus:outline-none "
                  placeholder="PHONE NUMBER"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <br />
              <button
                type="submit"
                className="xl:static inset-x-0 px-12 py-3 w-96 mx-auto xs:w-80 sm:mt-16 md:mt-[5%] lg:mt-2 xl:mt-2 rounded-md bg-[#CDE07A] text-black text-lg font-bold focus:outline-none"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
