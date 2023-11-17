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
const MainCard = () => {
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
                description={<Caption1> Diagram of typically developed end-to-end solutions </Caption1>}
            />
            <CardPreview
            >
                <img
                    src={analytics}
                    alt="analytics solution"
                />
            </CardPreview>
            <CardFooter>
                {/*<Button icon={<ShareRegular fontSize={16} />}>Share</Button>*/}
            </CardFooter>
        </Card>)
};
export default MainCard