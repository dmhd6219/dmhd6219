import React from 'react'
import {Button, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText} from "../styles/Global.styled";
import {FaGithub} from "react-icons/fa6";
import {ProjectImage, ProjectImageContainer, TechStackCard} from "../styles/MyProjects.styled";
import Project1 from '../assets/SocialNetworkScreenshot.png'
import {ProjectDetailType} from "../utils/Data";


const Project: (props : {data : ProjectDetailType}) => JSX.Element = (props) => {
    return (
        <FlexContainer fullWidthChild={true}>

            {/* Left Section */}
            <div>
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {props.data.name}
                    </Heading>
                    <IconContainer color="secondary" size="2rem">
                        <FaGithub/>
                    </IconContainer>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {props.data.stack.map((stack: string) => <TechStackCard>{stack}</TechStackCard>)}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem">
                    {props.data.desc}
                </ParaText>

                <Button>Visit Website</Button>
            </div>

            {/* Right Section */}
            <div>
                <ProjectImageContainer justify="flex-end">
                    <ProjectImage src={props.data.img} alt={props.data.name}/>
                </ProjectImageContainer>
            </div>


        </FlexContainer>
    )
}
export default Project
