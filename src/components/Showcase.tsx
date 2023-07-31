import React from 'react'
import {FlexContainer, Heading, PaddingContainer} from "../styles/Global.styled";

const Showcase = () => {
    return (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="15%"
            bottom="10%"
        >
            <FlexContainer
                fullWidthChild={true}
                align="center">
                <div>
                    <Heading as="h4" size="h4">
                        Hello!
                    </Heading>
                </div>
            </FlexContainer>
        </PaddingContainer>
    )
}
export default Showcase
