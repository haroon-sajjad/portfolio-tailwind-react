import { projects } from "../constants";
import { LatestProjectsCard } from "../components";

const LatestProjects = () => {
  return (
    <section id="projects" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          My <span className="text-coral-red"> Latest </span> Projects
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Explore my recent web development projects showcasing custom WordPress
          sites, dynamic ReactJS applications, and responsive designs with
          Bootstrap and Tailwind CSS.
        </p>
      </div>

      <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {projects.map((project) => (
          <LatestProjectsCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
