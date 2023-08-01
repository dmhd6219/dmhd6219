import React from 'react'
import {FlexContainer, Heading, IconContainer, PaddingContainer, ParaText} from "../styles/Global.styled";
import {FaGithub} from "react-icons/fa6";
import {ProjectImage, ProjectImageContainer, TechStackCard} from "../styles/MyProjects.styled";
import {ProjectDetailType} from "../utils/Data";
import {motion} from "framer-motion";
import {fadeInLeftVariant, fadeInRightVariant} from "../utils/Variants";


const Project: (props: { data: ProjectDetailType }) => JSX.Element = (props) => {
    return (
        <FlexContainer fullWidthChild={true} direction={props.data.id % 2 !== 0 ? 'row-reverse' : 'row'}>

            {/* Left Section */}
            <motion.div
                variants={props.data.id % 2 !== 0 ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {props.data.name}
                    </Heading>
                    {props.data.git &&
                        <IconContainer color="secondary" size="2rem" href={props.data.git}>
                            <FaGithub/>
                        </IconContainer>
                    }
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {props.data.stack.map((stack: string) => <TechStackCard>{stack}</TechStackCard>)}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem">
                    {props.data.desc}
                </ParaText>
            </motion.div>

            {/* Right Section */}
            <motion.div
                variants={props.data.id % 2 !== 0 ? fadeInLeftVariant : fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <ProjectImageContainer justify={props.data.id % 2 !== 0 ? 'flex-start' : 'flex-end'}>
                    <ProjectImage src={props.data.img} alt={props.data.name} loading="lazy"/>
                </ProjectImageContainer>
            </motion.div>


        </FlexContainer>
    )
}
export default Project
