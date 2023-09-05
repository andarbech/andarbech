import React from 'react';

const AppFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <p>&copy; {currentYear} Andres Arboleda. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default AppFooter;
