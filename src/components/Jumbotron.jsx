import React from "react";

const Jumbotron = () => {
  return (
    <div className="container mx-auto px-4 lg:px-6 py-2.5 flex flex-col lg:flex-row justify-between items-center mt-[100px]">
      {/* Description Section */}
      <section className="description-jumbotron w-full lg:w-[70%] p-[60px]">
        <p className="mt-6 text-left lg:text-left">Hello, I'm Rafli Dio.</p>
        <h1 className="text-[50px] lg:text-[70px] font-bold text-left lg:text-left">
          A Web Developer You Can Rely On.
        </h1>
        <p className="mt-6 text-left lg:text-left">
          "A student at Universitas Muhammadiyah Surakarta."
        </p>
      </section>
    </div>
  );
};
export default Jumbotron;
