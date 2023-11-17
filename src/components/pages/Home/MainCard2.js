import * as React from "react";
import {
    makeStyles,
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    shorthands,
    Body1,
    Caption1,
} from "@fluentui/react-components";
import { Text} from '@fluentui/react';

import { HandWave16Filled,EmojiSparkle16Filled } from "@fluentui/react-icons";
import imgPath from "../../../assets/perfil.png"
import analytics from "../../../assets/analytics.png"
import { Link } from '@fluentui/react-components';

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "720px",
        maxWidth: "100%",
    },
});
const MainCard2 = () => {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardHeader
                image={
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <div style={{cursor: "pointer"}}>
                        <a href="https://www.linkedin.com/in/arndresarboleda/"> 
                        <img  src={imgPath} alt="Andres Arboleda avatar picture"/>
                        </a>
                    </div>
                }
              header={
                    <Body1>
                       <Link href="https://www.linkedin.com/in/arndresarboleda/">  <b>Andres Arboleda.</b></Link> Technology Consultant | Developer 
                    </Body1>
                }
                description={<Caption1><HandWave16Filled/> </Caption1>}
            />

            <Text>
            Welcome to my website!<EmojiSparkle16Filled/> <br></br>I'm a seasoned technology consultant with a strong track record in delivering complex projects and tailored solutions. My expertise lies in configuring Microsoft products like Dynamics 365, Power Platform, Azure Data Solutions, Azure Web Apps, and Azure Data Factory. What sets me apart is my ability to leverage coding languages, elevating low-code platforms to achieve remarkable results for my clients. <br></br>I prioritize not only technical skills but also soft skills, making me an effective communicator and team player. With experience as a Digital Transformation Consultant and Microsoft Developer, I've successfully implemented cloud-based tools and created custom solutions to enhance operational efficiency.<br></br> I look forward to collaborating with you on your next venture!
            </Text>
                       <CardFooter>
            </CardFooter>
        </Card>)
};
export default MainCard2