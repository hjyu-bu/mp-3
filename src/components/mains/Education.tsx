import {MainStyle, MainWrapperStyle, Mainh6Style, MainUlStyle} from "../Styles.tsx";

export default function Education() {

    return (
        <>
            <title>Education | Resume</title>
            <MainStyle>
                <MainWrapperStyle id="main-wrapper">
                    <h3>Bachelor of Computer Science (In progress)</h3>
                    <h4>Gwangju Institute of Science and Technology, South Korea</h4>
                    <Mainh6Style>Mar 2021 - Present</Mainh6Style>
                    <MainUlStyle>
                        <li>TGPA 4.36 / 4.5</li>
                        <li>Member -- Division head of student council/union (Mar 2021 - Feb 2022)</li>
                        <li>Google Developer Group on campus (GDSC) | Member (Mar 2021 - Jun 2022)</li>
                    </MainUlStyle>
                    <h3>Boston University Exchange Student!!</h3>
                    <Mainh6Style>June 2025 - Present</Mainh6Style>
                    <MainUlStyle>
                        <li>CS392 - Topics in Computer Science</li>
                        <li>IS223 - Information Systems in Business</li>
                        <li>I am excited to dive into BU classes!</li>
                    </MainUlStyle>
                </MainWrapperStyle>
            </MainStyle>
        </>
    );
}