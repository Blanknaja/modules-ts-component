import * as React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
}

const ProjectCardVertical: React.FC<CardProps> = ({ title }) => {
  return (
    <div>
      <h1>My Title naja :{title}</h1>
    </div>
  );
};

export default ProjectCardVertical;


const StyledDiv = styled.div`
  width: 300px;
  height: 200px;
  background-color: blue;

`