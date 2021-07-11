import * as React from "react";
// import styled from "styled-components";

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

// const ProjectCardVerticalStyle = styled.div`
//   width: 250px;
//   height: 200px;
//   background: purple;
// `;
