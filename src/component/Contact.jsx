import React from 'react';

function Contact() {
  return (
    <div className="bg-gradient-to-r from-[#89D1D2] via-[#7D7ED6] to-[#050031] flex items-center justify-center px-5 lg:px-10 py-10 lg:py-20 lg:mt-10 mt-20">
      <div className="w-full max-w-lg bg-[#050031] p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase text-white">
          Contact us
        </h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none text-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-300 border-none"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-teal-300"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:ring-2 focus:ring-teal-300"
              id="message"
              placeholder="Write a Message"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              className="bg-[#7D7ED6] hover:bg-teal-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
              type="submit"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
