import React from 'react'
import {Heading, PaddingContainer, SecondaryText} from "../styles/Global.styled";
import {ProjectDetails, ProjectDetailType} from "../utils/Data";
import Project from "./Project";
import {motion} from "framer-motion";
import {fadeInTopVariant} from "../utils/Variants";

const MyProjects = () => {
    return (
        <PaddingContainer
            id="Projects"
            top="5%"
            bottom="5%"
            responsiveTop="20%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <Heading
                as={motion.h4}
                size="h4"
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
            >
                MY PROJECTS
            </Heading>

            <Heading
                as={motion.h2}
                size="h2"
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
            >
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
