import experiences from "./experiences.json";

export const getExperiences = () => {
  return experiences;
};

export default (req, res) => {
  const experiences = getExperiences();
  res.json(experiences);
};
