import { Metadata } from "next";

import ProjectsScreen from "@screen/projects";
import TransitionEffect from "@components/TransitionEffect";

export const metadata: Metadata = {
  title: "Affan Khalid - Projects",
  description: "Projects",
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <ProjectsScreen />
    </>
  );
};

export default Projects;
