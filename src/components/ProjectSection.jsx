import React from "react";
import Slider from "react-slick";

const ProjectSection = ({
  title,
  description,
  imageSrcs,
  frameworks,
  githubLink,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container mx-auto px-4 lg:px-6 py-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 shadow-md rounded-xl bg-white mt-10">
      {/* Gambar Proyek */}
      <section className="project-image w-full lg:w-[40%]">
        <Slider {...settings}>
          {imageSrcs.map((picture, index) => (
            <div key={index}>
              <img
                src={picture}
                alt={`${title} - gambar ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Deskripsi Proyek */}
      <section className="project-description w-full lg:w-[60%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Frameworks */}
        {frameworks && frameworks.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {frameworks.map((framework, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {framework}
              </span>
            ))}
          </div>
        )}

        {/* Tombol */}
        <div className="flex gap-4 mt-[30px]">
          <a
            href={githubLink} // Using the githubLink prop here
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center bg-black px-4 py-2 rounded-xl text-base font-medium mr-1 transform hover:-translate-y-1 md:mr-0 md:text-lg">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github fa-w-16 text-white h-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              <span className="ml-2 text-white">GitHub</span>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
