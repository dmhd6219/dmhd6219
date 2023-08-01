import React from 'react';
import {Container, MainBody} from "./styles/Global.styled";
import {ThemeProvider} from "styled-components";
import {Theme} from './utils/Theme'
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";

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
            </MainBody>
        </ThemeProvider>
    );
}

export default App;
