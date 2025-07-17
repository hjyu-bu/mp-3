import styled from "styled-components"
import {MainStyle, ImageStyle} from "../Styles.tsx";

const IntroStyle = styled.h6`
    font-size: calc(2px + 0.75vw + 0.5vh);
    padding: 1vh 0;
    color: #3a4454;
    text-align: center;
`

export default function Home() {

    return (
        <>
            <title>Home | Resume</title>
            <MainStyle>
                <ImageStyle src={"src/assets/me.jpg"} alt="profile picture"/>
                <IntroStyle id="intro">
                    A computer scientist / AI engineer who can quickly learn and adapt, cooperate well in teams.
                </IntroStyle>
            </MainStyle>
        </>
    );
}