/* import { star } from "../assets/icons"; */
const LatestProjectsCard = ({ imgUrl, name, desc, skills, url }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgUrl}
        alt={name}
        className="w-[464px] h-auto shadow-lg rounded-lg"
      />
      {/* <span className="flex gap-1 mt-4">
        <img src={star} alt="rating icon" width={16} height={16} />
        <img src={star} alt="rating icon" width={16} height={16} />
        <img src={star} alt="rating icon" width={16} height={16} />
        <img src={star} alt="rating icon" width={16} height={16} />
        <img src={star} alt="rating icon" width={16} height={16} />
      </span> */}
      {/* <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div> */}
      <div className="p-5">
        {/* <figure className="inline-flex flex-row gap-2 items-center ">
          <img src={skillWordPress} alt="WordPress" className="w-4 h-4" />
          <figcaption className="text-sm font-semibold text-slate-500 ">
            WordPress
          </figcaption>
        </figure> */}
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 block font-montserrat ">{desc}</p>
        <p className="flex gap-2 mt-5 mb-10 flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full text-xs ring-1 ring-slate-500 text-slate-500 justify-center items-center px-2 py-1 whitespace-nowrap capitalize"
            >
              {skill}
            </span>
          ))}
        </p>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title={name}
            className="rounded-full bg-orange-600 text-white justify-center items-center mt-5 px-5 py-3 whitespace-nowrap capitalize font-montserrat text-sm"
          >
            Visit Website
          </a>
        ) : (
          <span className="text-red-700 bg-red-100 border-l-2 border-l-red-700  block px-3 py-2">Backend access by admins only</span>
        )}
      </div>
    </div>
  );
};

export default LatestProjectsCard;
