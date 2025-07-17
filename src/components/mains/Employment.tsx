import {MainStyle, MainWrapperStyle, MainUlStyle, Mainh6Style} from "../Styles.tsx";

export default function Employment() {

    return (
        <>
            <title>Employment | Resume</title>
            <MainStyle>
                <MainWrapperStyle id="main-wrapper">
                    <h3>Research Intern, LG AI Research</h3>
                    <Mainh6Style>Jun 2024 - Dec 2024</Mainh6Style>
                    <MainUlStyle>
                        <li>
                            Developed and improved document understanding model, using both data-based and model
                            structure-based approaches.
                        </li>
                        <li>
                            Added multi-language support(En, Kr, Jp, Cn), ability to distinguish Image/Molecule/Math
                            Expression, and increased the maximum number of queries in prediction.
                        </li>
                        <li>
                            Achieved 8%p performance increase for private testset, and scored 91% on publicly
                            available testset.
                        </li>
                    </MainUlStyle>
                    <h3>AI Lab Intern, Gwangju Institute of Science and Technology</h3>
                    <Mainh6Style>Mar 2025 - Jun 2025</Mainh6Style>
                    <MainUlStyle>
                        <li>
                            Researched ways to improve Robot AI models for bimanual robotic manipulation tasks.
                        </li>
                        <li>
                            Improved the accuracy of the model by 30%p by utilizing object position and end-effector position queries while training.
                        </li>
                    </MainUlStyle>
                </MainWrapperStyle>
            </MainStyle>
        </>
    )
}