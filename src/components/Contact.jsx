import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="@apply grid-cols-[1fr_4fr] md:grid items-start">
          <div className="font-poppins mb-8">
            <div className="flex gap-3 items-center mt-2 py-6 border-b-[1px]">
              <div className="flex justify-center items-center bg-white p-3 border rounded-full">
                <i class="fa-solid fa-phone text-black"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-slate-400">+91 9935906911</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-2 py-6">
              <div className="flex justify-center items-center bg-white p-3 rounded-full">
                <i class="fa-solid fa-envelope text-black"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-slate-400">arsln.shd@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <form
              name="portfolio-contact-v1"
              className="flex flex-col w-full md:w-1/2"
              method="POST"
            >
              <input
                type="hidden"
                name="form-name"
                value="portfolio-contact-v1"
              />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
