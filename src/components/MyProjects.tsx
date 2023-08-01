import React from 'react'
import {Heading, PaddingContainer, SecondaryText} from "../styles/Global.styled";
import {ProjectDetails, ProjectDetailType} from "../utils/Data";
import Project from "./Project";

const MyProjects = () => {
    return (
        <PaddingContainer
            id="Projects"
            top="5%"
            bottom="5%"
        >
            <Heading as="h4" size="h4">
                MY PROJECTS
            </Heading>

            <Heading as="h2" size="h2">
                What <SecondaryText>I have built</SecondaryText>
            </Heading>

            {ProjectDetails.map((project: ProjectDetailType) =>
                <PaddingContainer top="5rem" bottom="5rem" key={project.id}>
                    <Project data={project}/>
                </PaddingContainer>
            )}

        </PaddingContainer>
    )
}
export default MyProjects
