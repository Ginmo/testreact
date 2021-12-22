import React, { useState, useEffect } from 'react';
import { IconButton, Grid, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBox from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Close from '@material-ui/icons/Close';
import DriveEta from '@material-ui/icons/DriveEta';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { hideNavButtons, showNavButtons, logIn } from '../actions';

const drawerWidth = 240;

const useStyles = makeStyles({
    menuItem: {
        fontSize: 20,
        borderRadius: "0%",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    menuHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    }
});
const Header = () => {
    const [leftMenuOpen, setLeftMenuOpen] = useState(false);
    const [rightMenuOpen, setRightMenuOpen] = useState(null);
    const { t } = useTranslation();
    const classes = useStyles();
    const navButtons = useSelector(state => state.navButtonsReducer);
    const isLoggedin = useSelector(state => state.loginReducer);
    //console.log(isLoggedin);
    console.log(navButtons);
    console.log(isLoggedin)
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(hideNavButtons());
        //dispatch(logIn());
    }, []);



    /*
    let hideButtons = classes.hideButtons;
    if (props.hideButtons !== undefined) {
        hideButtons = props.hideButtons;
    }
    */

    const handleLeftMenuOpening = () => {
        console.log("left_menu");
        if (leftMenuOpen === true) {
            setLeftMenuOpen(false);
        } else {
            setLeftMenuOpen(true);
        }
    }

    const handleRightMenuOpening = (event) => {
        console.log("right_menu");
        setRightMenuOpen(event.currentTarget);
    }

    const handleClose = (e) => {
        console.log(e.target.id);
        setRightMenuOpen(null);
    };

    const changeLanguage = (lng) => {
        console.log(lng);
        i18n.changeLanguage(lng);
    }

    return (
        <div>
            <AppBar position="static" style={{ background: "blue" }}>
                <Toolbar>
                    <Grid item>
                        <IconButton disabled={navButtons.disabled} onClick={handleLeftMenuOpening}>
                            <MenuIcon visibility={navButtons.visibility} />
                        </IconButton>
                    </Grid>

                    <Grid item md={1}>

                    </Grid>
                    <Grid container justify={"center"}>
                        <div>
                            <h1>{t('app_name')}</h1>

                            <h2>{t('header')}</h2>
                        </div>

                    </Grid>
                    <Grid item>
                        <Button size="small" onClick={() => changeLanguage('fi')}>fi</Button>
                    </Grid>
                    <Grid item>
                        <Button size="small" onClick={() => changeLanguage('en')}>en</Button>
                    </Grid>
                    <Grid item md={1}>

                    </Grid>
                    <Grid item>
                        <IconButton>
                            <AccountBox onClick={handleRightMenuOpening} />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer
                id="left-menu"
                className={classes.drawer}
                anchor="left"
                open={leftMenuOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.menuHeader}>
                    <IconButton>
                        <Close onClick={handleLeftMenuOpening} />
                    </IconButton>
                </div>

                <List>
                    <ListItem button>
                        <IconButton className={classes.menuItem} disableRipple={true}>
                            <DriveEta />
                            {t('menu_own_cars')}
                        </IconButton>
                    </ListItem>
                </List>
            </Drawer>

            <Menu
                id="right-menu"
                anchorEl={rightMenuOpen}
                keepMounted
                open={Boolean(rightMenuOpen)}
                onClose={handleClose}
            >
                <MenuItem id="profile" onClick={(e) => handleClose(e)}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>



    )
}

export default (Header);