import * as React from "react";

interface CardProps {
  title: string;
}

const ProjectCardVertical: React.FC<CardProps> = ({ title }) => {
  return (
    <div>
      <h1>My Title :{title}</h1>
    </div>
  );
};

export default ProjectCardVertical;
