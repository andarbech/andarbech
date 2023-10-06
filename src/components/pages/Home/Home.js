import React from 'react';
import MainCard from "./MainCard.js"
import MainCard2 from "./MainCard2.js"
import CVPDF from "./CVPDF.js"
import { Divider, makeStyles } from "@fluentui/react-components";
import { getTheme } from '@fluentui/react'
const useStyles = makeStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        columnGap: "3px",
        rowGap: "3px",
    },
})

const theme = getTheme();
const Home = () => {
    const styles = useStyles();
    return (
        <div className={styles.main}>
            <MainCard2 style={{ boxShadow: theme.effects.elevation8 }} />
            <Divider vertical style={{ height: "100%" }} />
            <CVPDF style={{ boxShadow: theme.effects.elevation8 }} />
            <Divider vertical style={{ height: "100%" }} />
            <MainCard style={{ boxShadow: theme.effects.elevation8 }} />
        </div>
    );
};

export default Home;
