import {MainStyle, MainWrapperStyle, Newlineh3Style, MainUlStyle} from "../Styles.tsx";

export default function Skill() {

    return (
        <>
            <title>Skill | Resume</title>
            <MainStyle>
                <MainWrapperStyle id="main-wrapper">
                    <Newlineh3Style className="newline">Programming Languages</Newlineh3Style>
                    <MainUlStyle $Center={true}>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>JavaScript</li>
                    </MainUlStyle>
                    <Newlineh3Style className="newline">Frameworks</Newlineh3Style>
                    <MainUlStyle $Center={true}>
                        <li>PyTorch</li>
                        <li>React/FastAPI</li>
                        <li>Docker/Kubernetes</li>
                    </MainUlStyle>
                    <Newlineh3Style className="newline">Languages</Newlineh3Style>
                    <MainUlStyle $Center={true}>
                        <li>English - iBT TOEFL 110 / 120</li>
                        <li>Korean - Native</li>
                    </MainUlStyle>
                </MainWrapperStyle>
            </MainStyle>
        </>
    )
}