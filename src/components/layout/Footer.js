import React from 'react';
import { Link } from '@fluentui/react-components';
const AppFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <p>&copy; {currentYear} <Link href="https://www.linkedin.com/in/arndresarboleda/"> Andres Arboleda.</Link> All rights reserved.</p>

            </div>
        </footer>
    );
};

export default AppFooter;
