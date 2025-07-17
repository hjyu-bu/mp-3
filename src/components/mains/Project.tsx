import {useState} from "react";
import styled from "styled-components"
import {MainWrapperStyle, MainStyle, MainUlStyle, Mainh6Style} from "../Styles";

// From styled-components official document -> Adapting styles based on props
// https://styled-components.com/docs/basics#adapting-based-on-props
const OutputStyle = styled.h5<{$isNegative?:boolean}>`
    color: ${(props) => props.$isNegative ? "darkred" : "#3a4454"};
    font-size: calc(2px + 0.9vw + 0.6vh);
    text-align: center;
`

const CalcWrapperStyle = styled.div`
    padding: 2vh 0;
    color: #3a4454;
    display: flex;
    flex-direction: row;
    width: 100%;
`

const LabelStyle = styled.label`
    font-size: calc(2px + 0.9vw + 0.6vh);
    margin: 0 1%;
    width: 20%;
    text-align: center;
    max-height: calc(2vw + 0.5vh);
`

const InputStyle = styled.input`
    font-size: calc(2px + 0.9vw + 0.6vh);
    margin: 0 1%;
    width: 20%;
    text-align: center;
    max-height: calc(2vw + 0.5vh);
`

const ButtonWrapperStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const ButtonStyle = styled.button`
    margin: 2vh 1%;
    padding: 1vh 2%;
    font-size: calc(2px + 0.75vw + 0.5vh);
    background-color: #3a4454;
    color: white;
    border: none;
    width: 15%;
`

export default function Project() {

    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [result, setResult] = useState("");
    const [isNegative, setIsNegative] = useState(false);

    function doadd(){
        let value = Number(val1)+Number(val2);
        setIsNegative(value < 0);
        setResult(`Result: ${value}`);
    }

    function dosub(){
        let value = Number(val1)-Number(val2);
        setIsNegative(value < 0);
        setResult(`Result: ${value}`);
    }

    function domult(){
        let value = Number(val1)*Number(val2);
        setIsNegative(value < 0);
        setResult(`Result: ${value}`);
    }

    function dodiv() {
        let value = Number(val1)/Number(val2);
        setIsNegative(value < 0);
        setResult(`Result: ${value}`);
    }

    function dopow() {
        let value = 1;
        for (let i = 0; i < Number(val2); i++) {
            value *= Number(val1);
        }
        setIsNegative(value < 0);
        setResult(`Result: ${value}`);
    }

    function doclr(){
        setResult("");
        setVal1("");
        setVal2("");
    }

    return (
        <>
            <title>Project | Resume</title>
            <MainStyle>
                <MainWrapperStyle id="main-wrapper">
                    <h3>Project MEDI-KNEE</h3>
                    <Mainh6Style>Feb 2024 - Apr 2024</Mainh6Style>
                    <MainUlStyle>
                        <li>Developed a Knee-MRI analysis service that could assist medical staffs during diagnosis.</li>
                        <li>
                            Using 3 AI models, provides 1) The probability of this patient having illness 2) Importance of
                            every slide in the MRI 3) Why the model thinks this way, using Grad-CAM.
                        </li>
                        <li>
                            Achieved around 5%p higher sensitivity compared to the base research paper, and received
                            positive feedback from doctors.
                        </li>
                    </MainUlStyle>
                    <h3>Turtle-ing</h3>
                    <Mainh6Style>Jul 2021</Mainh6Style>
                    <MainUlStyle>
                        <li>Developed a service that detects and alerts users in forward-head posture.</li>
                        <li>
                            Alerts users who are too close to the screen, provides daily average distance to the screen,
                            and provides hand-made stretch exercise videos.
                        </li>
                        <li>3rd place in OASIS Hackathon</li>
                    </MainUlStyle>
                    <h3>Calculator Project!</h3>
                </MainWrapperStyle>
                <CalcWrapperStyle id="calc-wrapper">
                    <LabelStyle htmlFor="input1">Number 1</LabelStyle><InputStyle id="input1" value={val1} onChange={(e) => setVal1(e.target.value)}/>
                    <LabelStyle htmlFor="input2">Number 2</LabelStyle><InputStyle id="input2" value={val2} onChange={(e) => setVal2(e.target.value)}/>
                </CalcWrapperStyle>
                <ButtonWrapperStyle id="button-wrapper">
                    <ButtonStyle onClick={doadd}>Add</ButtonStyle>
                    <ButtonStyle onClick={dosub}>Subtract</ButtonStyle>
                    <ButtonStyle onClick={domult}>Multiply</ButtonStyle>
                    <ButtonStyle onClick={dodiv}>Divide</ButtonStyle>
                    <ButtonStyle onClick={dopow}>Power</ButtonStyle>
                    <ButtonStyle onClick={doclr}>Clear</ButtonStyle>
                </ButtonWrapperStyle>
                <OutputStyle id="output" $isNegative={isNegative}>{result}</OutputStyle>

            </MainStyle>
        </>
    );
}