import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "React & Next" ? (
            <ToggleButton
              active
              value="React & Next"
              onClick={() => setToggle("React & Next")}
            >
              React & Next APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="React & Next"
              onClick={() => setToggle("React & Next")}
            >
              React & Next APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Landing Pages" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("Landing Pages")}
            >
              Landing Pages
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Landing Pages"
              onClick={() => setToggle("Landing Pages")}
            >
              Landing Pages
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Html & Css" ? (
            <ToggleButton
              active
              value="Html & Css"
              onClick={() => setToggle("Html & Css")}
            >
              Html & Css
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Html & Css"
              onClick={() => setToggle("Html & Css")}
            >
              Html & Css
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
