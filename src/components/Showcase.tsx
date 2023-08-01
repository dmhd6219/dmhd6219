import React from 'react'
import {
    FlexContainer,
    Heading,
    IconContainer,
    PaddingContainer,
    ParaText,
    SecondaryText
} from "../styles/Global.styled";
import {FaGithub, FaSquareLastfm, FaTelegram} from "react-icons/fa6";


const Showcase = () => {
    return (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="15%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"

        >
            <FlexContainer
                fullWidthChild={true}>
                <div>

                    {/* Greetings */}
                    <Heading as="h4" size="h4">
                        Hello!
                    </Heading>

                    <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                        My name is <SecondaryText>Svyatoslav Svyatkin</SecondaryText>
                    </Heading>

                    <Heading as="h3" size="h3">
                        I'm a <SecondaryText>Full-Stack Developer</SecondaryText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom="4rem">
                        I have no working experience but a strong passion and eagerness to learn.
                        I'm confident that I can quickly become a valuable member of your team.
                    </ParaText>

                    {/* Icons */}
                    <FlexContainer gap="20px" responsiveFlex={true}>
                        <IconContainer color="secondary" size="1.5rem">
                            <FaGithub/>
                        </IconContainer>

                        <IconContainer color="secondary" size="1.5rem">
                            <FaTelegram/>
                        </IconContainer>

                        <IconContainer color="secondary" size="1.5rem">
                            <FaSquareLastfm/>
                        </IconContainer>
                    </FlexContainer>

                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}
export default Showcase
