import React from 'react';
import { CommandBar } from '@fluentui/react/lib/CommandBar';
import { CommandBarButton } from '@fluentui/react/lib/Button';
import { DirectionalHint } from '@fluentui/react/lib/Callout';
import { ContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import { getTheme } from '@fluentui/react/lib/Styling';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/aarboleda.png';

const theme = getTheme();

const itemStyles = {
    label: { fontSize: 18 },
    palette: { color: theme.palette.green },
};

const menuStyles = {
    subComponentStyles: { menuItem: itemStyles, callout: {} },
    palette: { color: theme.palette.red},
    
};


const CustomButton = (props) => {
    const navigate = useNavigate();

    const buttonOnMouseClick = () => {
        const targetUrl = `/${props.text}`;
        navigate(targetUrl);
    };

    return (
        <CommandBarButton
            {...props}
            onClick={buttonOnMouseClick}
            styles={itemStyles}
        />
    );
};

const CustomMenuItem = (props) => {
    return <ContextualMenuItem {...props} />;
};

const overflowProps = {
    ariaLabel: 'commands',
    menuProps: {
        contextualMenuItemAs: CustomMenuItem,
        styles: menuStyles,
        items: [],
        isBeakVisible: true,
        beakWidth: 20,
        gapSpace: 10,
        directionalHint: DirectionalHint.topCenter,
    },
};

const customStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxShadow: theme.effects.elevation16,
};

const NavMenu = () => {
    const navigate = useNavigate(); 
    const _items = [
        {
            key: 'Projects',
            text: 'Projects',
            ItemIconColor:"#f3f2f0",
            subMenuProps: {
                contextualMenuItemAs: CustomMenuItem,
                styles: menuStyles,
                items: [
                    {
                        key: 'tickets',
                        text: 'Tickets',
                        onClick: () => {
                            navigate('/Tickets'); 
                        },
                    },
                    //{
                    //    key: 'ProjectOnline',
                    //    text: 'ProjectOnline',
                    //    onClick: () => {
                    //        navigate('/ProjectOnline');
                    //    },
                    //},
                ],
            },
        },
        // {
        //     key: 'Contact',
        //     text: 'Contact',
        // }

    ];

    return (
        <div style={customStyle}>
            <Link to='/andarbech'>
                <img src={logo} alt='Andres Arboleda' width='auto' height='71px' style={itemStyles.icon} />
            </Link>
            <CommandBar
                overflowButtonProps={overflowProps}
                buttonAs={CustomButton}
                items={_items}
                ItemOverflow="true"
            />
        </div>
    );
};

export default NavMenu;
