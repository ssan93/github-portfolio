import ProjectCard from "./ProjectCard";

const Experience = ({ experiences }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {experiences?.map((experience) => (
        <ProjectCard key={experience.id} project={experience} />
      ))}
    </div>
  );
};

export default Experience;
