 import React, { useEffect } from "react";
import {
    Virtualizer,
    useStaticVirtualizerMeasure,
} from "@fluentui/react-components/unstable";
import imgPath from "../../../assets/perfil.png"

import {
    makeStyles,
    Card,
    CardHeader,
    shorthands,
    Body1,
    Caption1, Subtitle2, Subtitle1, Link
} from "@fluentui/react-components";

/*
const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        //overflowY: "auto",
        width: "100%",
        height: "100%",
        maxHeight: "750px",

    },
    child: {
        height: "100%",
        //lineHeight: "100px",
        width: "100%",
    },
});
*/
const useStyles = makeStyles({
    card: {
        ...shorthands.margin("auto"),
        width: "720px",
        maxWidth: "100%",
    },
});

const PBIcard = () => {
        useEffect(() => {
            // Function to find and click the "Fit to page" button
            const clickFitToPageButton = () => {
                const fitToPageButton = document.getElementById(
                    'fitToPageButton'
                );

                if (fitToPageButton) {
                    fitToPageButton.click();
                } else {
                    console.error("Fit to page button not found");
                }
            };

            // Set a timeout of 1 second before calling the click function
            setTimeout(clickFitToPageButton, 1000);

        }, []);
    const styles = useStyles();
    const childLength = 1;

    const { virtualizerLength, bufferItems, bufferSize, scrollRef } =
        useStaticVirtualizerMeasure({
            defaultItemSize: 750,
        });
    return (
        <Card className={styles.card}>
            <CardHeader
                image={
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img src={imgPath} alt="Andres Arboleda avatar picture" />
                }
                header={
                    <Body1>
                        <b>Andres Arboleda </b> Cloud Consultant
                    </Body1>
                }
                description={<Caption1>
                    <Subtitle1> Tickets Project	</Subtitle1><br></br>
                    </Caption1>}
            />
            <Caption1>
                 Welcome to this visionary data architecture project, where the power of Azure cloud services converges to revolutionize data transformation and analysis.<br></br>
                    As a seasoned Data Architect, I am delighted to unveil this transformative journey, meticulously designed to harness Azure's capabilities for data excellence.<br></br>

                    <Subtitle2>Step 1: Data Extraction from SharePoint</Subtitle2> <br></br>

                Benefit from Azure's scalability and impeccable data security as we seamlessly extract data from <Link href="https://uses0.sharepoint.com/:x:/s/datatickets/EZVPRcgU9p9IiXDzm8KC6agBp7oz-M97BQmCO1WKnWBofw?e=t70Rnu">SharePoint</Link>. Our solution ensures your data is not just accessible but protected at all times.
                    <br></br>
                    <Subtitle2>Step 2: Data Enrichment from External Sources </Subtitle2><br></br>
                    Elevate your insights with real-time data enrichment, a feature powered by Azure. We guarantee the reliability and consistency of your data, enhancing its relevance and quality.
                    <br></br>
                    <Subtitle2> Step 3: Secure Cloud Storage in Azure</Subtitle2><br></br>
                    Azure's cost-efficiency and data redundancy combine to offer you secure and dependable cloud storage. Say goodbye to concerns about data availability and recovery.

                    <br></br> <Subtitle2>Step 4: Store Procedures for Customized Reporting</Subtitle2><br></br>
                    Experience enhanced query performance and tailored reporting tables through Azure's Store Procedures. Your data analysis becomes precise and efficient.

                    <br></br><Subtitle2> Step 5: Visual Reporting with Power BI</Subtitle2><br></br>
                    Empower your team with dynamic data visualization and interactive reports using Power BI. Unlock the potential of your data.

                    <br></br> <Subtitle2>Conclusion:</Subtitle2><br></br>
            This project epitomizes the harmonious integration of Azure cloud services in modern data architecture.It ensures scalability, security, cost-efficiency, and data quality throughout your data's journey. Our solution is the cornerstone of data excellence, providing actionable insights that drive informed decisions for your organization.</Caption1>
       {/*<div*/}
       {/*     aria-label="Virtualizer Example"*/}
       {/*     className={styles.container}*/}
       {/*     role={"list"}*/}
       {/*     ref={scrollRef}*/}
       {/* >*/}
       {/*     <Virtualizer*/}
       {/*         numItems={childLength}*/}
       {/*         virtualizerLength={virtualizerLength}*/}
       {/*         bufferItems={bufferItems}*/}
       {/*         bufferSize={bufferSize}*/}
       {/*         itemSize={750}*/}
       {/*     >*/}
       {/*         {(index) => {*/}
       {/*             return (*/}
       {/*                 //<iframe title="ticketsPBI" width="100%" height="600px" src="https://app.powerbi.com/view?r=eyJrIjoiYmM3Yjk3NzYtYWE1OS00YTJlLTliMTMtOWVkYWE5ZDFjZDJkIiwidCI6ImVmNGE2ODRlLTgxYjUtNDkxYy1hOThlLWM3YjMxYmU2YzQ2OSIsImMiOjh9" allowFullScreen={true}></iframe>*/}
            <iframe title="ticketsPBI" width="100%" height="600px" src="https://app.powerbi.com/view?r=eyJrIjoiYmM3Yjk3NzYtYWE1OS00YTJlLTliMTMtOWVkYWE5ZDFjZDJkIiwidCI6ImVmNGE2ODRlLTgxYjUtNDkxYy1hOThlLWM3YjMxYmU2YzQ2OSIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true" allowedTags="true" ></iframe>
            {/*        );*/}
            {/*    }}*/}
            {/*</Virtualizer>*/}
            {/*</div>*/}
        </Card>
      
    );
};
export default PBIcard