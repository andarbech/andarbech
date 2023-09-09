import * as React from "react";
import PDfdocs from "../../../assets/CV.pdf"
import imgPath from "../../../assets/perfil.png"
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { Link } from '@fluentui/react-components';


import {
    makeStyles,
    Card,
    CardFooter,
    CardHeader,
    shorthands,
    Body1,
    Caption1,
    Button
} from "@fluentui/react-components";

import { ArrowDownload24Filled } from "@fluentui/react-icons";
//const defaultLayoutPluginInstance = defaultLayoutPlugin();

const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "720px",
        maxWidth: "100%",
    },
});

const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = PDfdocs;
    link.download = "Curriculum_Vitae.pdf"; 
    link.target = "_blank"; 
    link.rel = "noopener noreferrer";
    link.click();
}
const CVPDF = () => {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardHeader
                image={
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <div style={{cursor: "pointer"}}>
                        <a href="https://www.linkedin.com/in/arndresarboleda/"> 
                        <img  src={imgPath} alt="Andres Arboleda avatar picture"/>
                        </a>
                    </div>
                }
                header={
                    <Body1>
                        <Link href="https://www.linkedin.com/in/arndresarboleda/"> <b>Andres Arboleda.</b></Link> Cloud Consultant
                    </Body1>
                }
                description={<Caption1>Curriculum Vitae </Caption1>}
            />
            <Card>
                {/*<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">*/}
                <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js">
                <div style={{ width: "100%", height: "100%",marginBottom: "-4px"}}>
                        <Viewer
                            fileUrl={PDfdocs}
                        />
                </div>
                    </Worker>
            </Card>
            <CardFooter>
                <Button appearance="primary" onClick={downloadPdf} icon={<ArrowDownload24Filled />}>
                    Download
                </Button>
            </CardFooter>
           </Card>
    );
    };
export default CVPDF
/*


return (
    
);*/