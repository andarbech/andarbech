//  import React, { useEffect } from "react";
// import {
//     Virtualizer,
//     useStaticVirtualizerMeasure,
// } from "@fluentui/react-components/unstable";
// import imgPath from "../../../assets/perfil.png"

// import {
//     makeStyles,
//     Card,
//     CardHeader,
//     shorthands,
//     Body1,
//     Caption1, Subtitle2, Subtitle1
// } from "@fluentui/react-components";
// import { Text, Stack, DetailsList, Link } from '@fluentui/react';
// /*
// const useStyles = makeStyles({
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         //overflowY: "auto",
//         width: "100%",
//         height: "100%",
//         maxHeight: "750px",

//     },
//     child: {
//         height: "100%",
//         //lineHeight: "100px",
//         width: "100%",
//     },
// });
// */
// const useStyles = makeStyles({
//     card: {
//         ...shorthands.margin("auto"),
//         width: "720px",
//         maxWidth: "100%",
//     },
// });

// const PBIcard = () => {
//         useEffect(() => {
//             // Function to find and click the "Fit to page" button
//             const clickFitToPageButton = () => {
//                 const fitToPageButton = document.getElementById(
//                     'fitToPageButton'
//                 );

//                 if (fitToPageButton) {
//                     fitToPageButton.click();
//                 } else {
//                     console.error("Fit to page button not found");
//                 }
//             };

//             // Set a timeout of 1 second before calling the click function
//             setTimeout(clickFitToPageButton, 1000);

//         }, []);
//     const styles = useStyles();
//     const childLength = 1;

//     const { virtualizerLength, bufferItems, bufferSize, scrollRef } =
//         useStaticVirtualizerMeasure({
//             defaultItemSize: 750,
//         });
//     return (
//         <Card className={styles.card}>
//             <CardHeader
//                 image={
//                     // eslint-disable-next-line jsx-a11y/img-redundant-alt
//                     <img src={imgPath} alt="Andres Arboleda avatar picture" />
//                 }
//                 header={
//                     <Body1>
//                         <b>Andres Arboleda </b> Cloud Consultant
//                     </Body1>
//                 }
//                 description={<Caption1>
//                     <Subtitle1> Tickets Project	</Subtitle1><br></br>
//                     </Caption1>}
//             />
//              <Stack>

//       <Text>
//         In this project, I have leveraged my expertise in React, Python, C#, Azure, and related cloud technologies to design
//         and implement an end-to-end data pipeline and reporting solution that demonstrates my capabilities in working with
//         diverse tools.
//       </Text>

//       <Text variant="large">Key Project Phases:</Text>
//       <DetailsList
//         items={[
//           { key: '1', phase: 'Data Extraction from SharePoint' },
//           { key: '2', phase: 'Azure Blob Storage' },
//           { key: '3', phase: 'Azure Synapse Analytics' },
//           { key: '4', phase: 'Data Transformation with PySpark' },
//           { key: '5', phase: 'SQL Database' },
//           { key: '6', phase: 'Stored Procedure for Reporting Schema' },
//           { key: '7', phase: 'Power BI Visualization' },
//         ]}
//         columns={[
//           {
//             key: 'phase',
//             name: 'Project Phases',
//             fieldName: 'phase',
//             minWidth: 200,
//             maxWidth: 400,
//           },
//         ]}
//       />

//       <Text variant="large">Outcome:</Text>
//       <Text>
//         This project not only demonstrates my proficiency in React, Python, C#, and cloud technologies like Azure but also
//         showcases my ability to design and implement complex data pipelines, perform data transformations, and create
//         meaningful visualizations for data-driven decision-making.
//       </Text>
//       <Text>
//         Through this project, I have exemplified my skills in end-to-end data handling, ensuring data accuracy, security, and
//         accessibility for insightful reporting.
//       </Text>

//       <Text>
//         Feel free to reach out if you'd like to see specific code snippets or have any questions about this project.
//         <Link href="mailto:andarbech1@gmail.com">Email Me</Link>
//       </Text>
//     </Stack>
//                        <iframe title="ticketsPBI" width="100%" height="600px" src="https://app.powerbi.com/view?r=eyJrIjoiYmM3Yjk3NzYtYWE1OS00YTJlLTliMTMtOWVkYWE5ZDFjZDJkIiwidCI6ImVmNGE2ODRlLTgxYjUtNDkxYy1hOThlLWM3YjMxYmU2YzQ2OSIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true" allowedTags="true" ></iframe>
//             </Card>
      
//     );
// };
// export default PBIcard
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
    Caption1, Subtitle2, Subtitle1
} from "@fluentui/react-components";
import { Text, Stack, DetailsList, Link } from '@fluentui/react';
import { DocumentMargins20Filled, Key20Filled } from "@fluentui/react-icons";

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

    const projectPhases = [
        {
            key: '1',
            phase: 'Data Extraction from SharePoint',
            description: 'Extracted data from SharePoint, ensuring seamless integration with Azure services for efficient data transfer.',
        },
        {
            key: '2',
            phase: 'Azure Blob Storage',
            description: 'Stored the extracted data securely in Azure Blob Storage, utilizing Azure\'s robust cloud infrastructure.',
        },
        {
            key: '3',
            phase: 'Azure Synapse Analytics',
            description: 'Utilized Azure Synapse to orchestrate and manage the data pipeline, ensuring scalability and optimal performance.',
        },
        {
            key: '4',
            phase: 'Data Transformation with PySpark',
            description: 'Used PySpark notebooks within Azure Synapse to transform and process the stored data efficiently.',
        },
        {
            key: '5',
            phase: 'SQL Database',
            description: 'Stored the transformed data in a SQL database, and set up a scheduled pipeline for automated data processing.',
        },
        {
            key: '6',
            phase: 'Stored Procedure for Reporting Schema',
            description: 'Created a custom SQL stored procedure to generate a comprehensive reporting schema from the processed data.',
        },
        {
            key: '7',
            phase: 'Power BI Visualization',
            description: 'Used the reporting schema to create visually appealing reports and dashboards in Power BI, showcasing the insights derived from the data.',
        },
    ];

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
                        <Link href="https://www.linkedin.com/in/arndresarboleda/"> <b>Andres Arboleda </b></Link>Cloud Consultant
                    </Body1>
                }
                description={<Caption1>
                    <Text> <b>Tickets Project.</b></Text><br></br>
                </Caption1>}
            />
            <Stack>
                <Text>
                    In this project, I have leveraged my expertise in React, Python, C#, Azure, and related cloud technologies to design
                    and implement an end-to-end data pipeline and reporting solution that demonstrates my capabilities in working with
                    diverse tools.
                </Text>
                <DetailsList
                    items={projectPhases}
                    columns={[
                        {
                            key: 'phase',
                            name: 'Project Phases',
                            fieldName: 'phase',
                            minWidth: 200,
                            maxWidth: 200,
                        },
                        {
                            key: 'description',
                            name: 'Description',
                            fieldName: 'description',
                            minWidth: 300,
                            isMultiline: true,
                        },
                    ]}
                />
                <Text>Conclusion:</Text>
                <Text>
                    This project not only demonstrates my proficiency in React, Python, C#, and cloud technologies like Azure but also
                    showcases my ability to design and implement complex data pipelines, perform data transformations, and create
                    meaningful visualizations for data-driven decision-making.
                </Text>
                <Text>
                    Through this project, I have exemplified my skills in end-to-end data handling, ensuring data accuracy, security, and
                    accessibility for insightful reporting.
                </Text>

                <Text>
                    Feel free to reach out if you'd like to see specific code snippets or have any questions about this project.<br></br>
                    <Link href="mailto:andarbech1@gmail.com">Email Me</Link>
                </Text>
            </Stack>
            <iframe title="ticketsPBI" width="100%" height="600px" src="https://app.powerbi.com/view?r=eyJrIjoiYmM3Yjk3NzYtYWE1OS00YTJlLTliMTMtOWVkYWE5ZDFjZDJkIiwidCI6ImVmNGE2ODRlLTgxYjUtNDkxYy1hOThlLWM3YjMxYmU2YzQ2OSIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true" allowedTags="true"></iframe>
        </Card>
    );
};

export default PBIcard;
