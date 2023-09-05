import React from 'react';
import NavMenu from './NavMenu';
import AppFooter from './Footer'
import { Stack} from '@fluentui/react/lib/Stack';
import { Divider } from "@fluentui/react-components";

const Layout = (props) => {
    return (<div >
        <NavMenu />
        <div style={{ backgroundColor: "#f3f2f0" }}>
        <Divider vertical  style={{ height: "100%" }} />
        {props.children}
        <Stack>
        <AppFooter />
        </Stack>
        </div>
    </div>)
};
export default Layout;
