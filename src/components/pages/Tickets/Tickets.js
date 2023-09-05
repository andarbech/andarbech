import React from "react";
import PBIcard from "./PowerBiCard";
//import { Divider } from "@fluentui/react-components";

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

const Tickets = () => {
    const styles = useStyles();

    return (<div className={styles.main}>
        <PBIcard style={{ boxShadow: theme.effects.elevation8 }} />
        <Divider style={{ height: "100%" }} />
    </div>)
};
export default Tickets;