import { Routes, Route } from "react-router"
import Header from "./Header"
import Nav from "./Nav"
import Footer from "./Footer"
import Home from "./mains/Home.tsx"
import Education from "./mains/Education.tsx"
import Project from "./mains/Project.tsx"
import Employment from "./mains/Employment.tsx"
import Experience from "./mains/Experience.tsx"
import Skill from "./mains/Skill.tsx"
import Other from "./mains/Other.tsx"

import styled from "styled-components"

const Wrapper = styled.div`
    background-color: antiquewhite;
    width: 80vw; /* Will limit width from the right; starting from left, limit 80% of hardware view width */
    margin: auto;
    font-family: "Sora", sans-serif;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

export default function Root() {

    return (
        <Wrapper>
            <Header/>  {/* Static Elements : Always Rendered */}
            <Container>
                <Nav/>
                <Routes>  {/* Dynamic Elements : Rendered conditionally based on value of path */}
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education.html`} element={<Education/>}/>
                    <Route path={`/employment.html`} element={<Employment/>}/>
                    <Route path={`/project.html`} element={<Project/>}/>
                    <Route path={`/experience.html`} element={<Experience/>}/>
                    <Route path={`/skill.html`} element={<Skill/>}/>
                    <Route path={`/other.html`} element={<Other/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Wrapper>
    )
}