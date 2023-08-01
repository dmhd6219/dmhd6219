import React from 'react';
import {Container, FadeImage, MainBody} from "./styles/Global.styled";
import {ThemeProvider} from "styled-components";
import {Theme} from './utils/Theme'
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";

import TopFadeImage from './assets/top.png';
import LeftFadeImage from './assets/left.png';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <MainBody>
                <Navbar/>
                <Container>
                    <Showcase/>
                    <MySkills/>
                    <MyProjects/>
                </Container>

                <FadeImage src={TopFadeImage} top="0"/>
                <FadeImage src={LeftFadeImage} top="30vh"/>
            </MainBody>
        </ThemeProvider>
    );
}

export default App;
