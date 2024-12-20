import React from 'react'

function Contact() {
  return (
    <div className="bg-gradient-to-r from-[#89D1D2] via-[#7D7ED6] flex flex-row items-center justify-center px-5 lg:px-10 py-10 lg:py-20 lg:mt-5 ">
          
            <div className="leading-8 p-8 ">
              
              <form className="shadow-md rounded px-40 pt-6 bg-[#050031] pb-8  mt-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase">Contact us</h2>
        
        {/* Name */}
        <div className="mb-4 lg:w-96">
          <label className="block text-white text-sm font-bold mb-2 " htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none text-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline border-none"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        
        {/* Email */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="Message">
            Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 pb-20 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="Message"
            type="Message"
            placeholder="Write a Message"/>
          <div className="flex items-center justify-center">
          <button
            className="bg-[#7D7ED6] hover:bg-teal-300 mt-6 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Request
          </button>
        </div>
            </div>
              </form>
              </div>
            
            </div>
        
  )
}

export default Contact;