import {MainStyle, MainWrapperStyle, MainUlStyle, ImageStyle, Newlineh3Style} from "../Styles.tsx";

export default function Other() {

    return (
        <>
            <title>Other | Resume</title>
            <MainStyle>
                <MainWrapperStyle id="main-wrapper">
                    <Newlineh3Style className="newline">Contacts</Newlineh3Style>
                    <MainUlStyle $Center={true}>
                        <li>E-mail : hjyu@bu.edu</li>
                        <li>Secondary E-mail : lukehanjun@gm.gist.ac.kr</li>
                        <li>Phone : +82-10-9999-9999</li>
                        <li>Github : <a href="https://github.com/hjyu-bu">@hjyu-bu</a></li>
                        <li>LinkedIn : <a href="">@linkedin</a></li>
                    </MainUlStyle>
                    <Newlineh3Style className="newline">Thanks for reading my resume!</Newlineh3Style>
                    <ImageStyle src="public/thankyou.jpg" alt="thank you"/>
                </MainWrapperStyle>
            </MainStyle>
        </>
    )
}