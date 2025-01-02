import React from "react";

const Jumbotron = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-10 flex flex-col lg:flex-row justify-between items-center mt-[50px]">
      {/* Description Section */}
      <section className="description-jumbotron w-full lg:w-[60%] p-4 lg:p-[60px]">
        <h2 className="mt-6 text-[24px] lg:text-[40px] text-center lg:text-left">
          Hello, I'm Rafli Dio.
        </h2>
        <h1 className="text-[30px] lg:text-[70px] font-bold text-center lg:text-left leading-tight">
          Software Developer.
        </h1>
        <p className="mt-6 text-center lg:text-left text-sm lg:text-base">
          "Hello, my name is Rafli Dio Muhammad Valent. You can call me Rafli. I
          am a student at Universitas Muhammadiyah Surakarta.have 3 years of
          experience in web development."
        </p>

        {/* Button Section */}
        <div className="mt-8 flex justify-center lg:justify-start">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition">
            Experience
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="mt-[50px] flex space-x-4 text-left  justify-center lg:justify-start">
          {/* GitHub */}
          <a
            href="https://github.com/rafli-dio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 text-black"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.51 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.65 9.65 0 0112 6.8c.85.01 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.33 4.69-4.56 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.16.58.67.48A10.002 10.002 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rafli-dio-3298b0205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 ml-[20px] text-black"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8.34 19h-2.69v-7.34h2.69v7.34zM6.99 10.48c-.86 0-1.56-.7-1.56-1.56s.7-1.56 1.56-1.56 1.56.7 1.56 1.56-.7 1.56-1.56 1.56zm12.02 8.52h-2.69v-3.81c0-.91-.03-2.08-1.27-2.08s-1.46 1-1.46 2.03v3.86h-2.69v-7.34h2.58v1h.04c.36-.69 1.23-1.42 2.53-1.42 2.7 0 3.2 1.78 3.2 4.09v3.68z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/raflidio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="w-12 h-12 ml-[20px] text-black"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-jumbotron w-full lg:w-[40%] flex justify-center items-center mb-6 lg:mt-[20px]">
        <img
          src="./images/oke-rafli.png" // Ganti dengan path gambar Anda
          alt="Jumbotron"
          className="w-full lg:w-[80%] h-auto object-cover"
        />
      </section>
    </div>
  );
};

export default Jumbotron;
