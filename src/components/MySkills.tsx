import {
    FlexContainer,
    Heading,
    IconContainer,
    PaddingContainer,
    ParaText,
    SecondaryText
} from "../styles/Global.styled";
import {SkillsCard, SkillsCardContainer} from "../styles/MySkills.styled";
import {Skills, SkillType} from '../utils/Data'

const MySkills = () => {
    return (
        <PaddingContainer
            id="Skills"
            top="10%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <FlexContainer fullWidthChild={true} responsiveFlex={true} responsiveDirection="column-reverse">

                {/* Left Section */}
                <SkillsCardContainer>
                    {Skills.map((skill: SkillType) =>
                        <SkillsCard>
                            <IconContainer size="5rem" color="secondary">
                                {skill.icon}
                            </IconContainer>
                            <Heading as="h4" size="h4">
                                {skill.tech}
                            </Heading>
                        </SkillsCard>)}
                </SkillsCardContainer>

                {/* Right Section */}
                <div>
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2" top="0.5rem">
                        What <SecondaryText>I can do</SecondaryText>
                    </Heading>
                    <ParaText top="2rem" bottom="1.5rem">
                        I have a wide range experience
                        in <SecondaryText>Front-End</SecondaryText> and <SecondaryText>Back-End</SecondaryText> development.
                        As for Front-End, I am proficient in HTML, CSS3, Javascript, Typescript, Tailwind CSS,
                        React and NextJS, Svelte and SvelteKit. I've built responsive applications, and I am familiar
                        with the latest web development trends.
                    </ParaText>

                    <ParaText>
                        As for Back-End, I know Python, Flask and FastAPI. I have experience building scalable
                        and performant web APIs, and I am up-to-date on the latest Back-End development
                        technologies and techniques.
                    </ParaText>
                </div>
            </FlexContainer>

        </PaddingContainer>
    )
}
export default MySkills
