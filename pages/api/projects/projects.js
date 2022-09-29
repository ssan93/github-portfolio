import projects from "./projects.json";

export const getProjects = () => {
  return projects;
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
