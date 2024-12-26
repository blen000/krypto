import React from "react";

const About = () => {
  return (
  <div className="bg-[url('../src/assets/c13.webp')] bg-no-repeat bg-cover flex flex-col lg:flex-row items-center justify-center mx-auto px-5 lg:px-10 py-10 lg:py-20">
      {/* Text Section */}
      <div className="w-full lg:w-2/5 px-4 sm:px-6 lg:px-10 flex justify-center">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold font-serif mt-20 mb-6">
            About Us
          </h1>
          <p className="text-l sm:leading-8 p-4 sm:p-6 lg:p-8 text-justify bg-[#050031] text-white rounded-lg shadow-lg">
            Our company stands at the forefront of the cryptocurrency
            revolution, leveraging cutting-edge blockchain technology to
            provide innovative financial solutions. Founded on the principles
            of transparency, decentralization, and security, we aim to empower
            individuals and businesses in the digital economy.
            <br />
            <br />
            A future where cryptocurrency adoption is universal, financial
            systems are inclusive, and blockchain technology drives global
            innovation.
            <br />
            <br />
            To democratize access to financial tools and create a seamless
            bridge between traditional finance and the decentralized world. We
            strive to enable users to manage, invest, and transact with digital
            assets confidently and securely.
          </p>
        </div>
      </div>

      {/* Placeholder for Additional Section */}
      {/* <div className="hidden lg:flex w-full lg:w-2/5 justify-center">
        Add content like an image, chart, or any visual here
      </div> */}
    </div>
    // </div>
  );
};

export default About;
