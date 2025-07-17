import {MainStyle, MainWrapperStyle, MainUlStyle, Mainh6Style} from "../Styles.tsx";

export default function Experience() {

    return (
        <>
            <title>Experience | Resume</title>
            <MainStyle>
                <MainWrapperStyle id="main-wrapper">
                    <h3>X-Ray Segmentation Competition, 1st place</h3>
                    <Mainh6Style>Jan 2024</Mainh6Style>
                    <MainUlStyle>
                        <li>A kaggle-like competition for multi-label segmentation of X-Ray images.</li>
                        <li>
                            Used augmentation methods that makes bone boundaries clearer, and combined instance
                            segmentation results for better performance.
                        </li>
                    </MainUlStyle>
                    <h3>Recyclable Trash Detection Competition, 6th place</h3>
                    <Mainh6Style>Dec 2023</Mainh6Style>
                    <MainUlStyle>
                        <li>A kaggle-like competition for recyclable trash detection from street images, also classifying recycle types of each trash</li>
                        <li>
                            Re-labeled the dataset with our own guidelines that help the model perform better,
                            after finding out that the original labels had many wrong answers.
                        </li>
                    </MainUlStyle>
                </MainWrapperStyle>
            </MainStyle>
        </>
    )
}