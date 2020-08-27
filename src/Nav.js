import React from 'react';
import { Bar, AppBar, Toolbar, Button } from 'react95';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import './App.css';
import coldGray from 'react95/dist/themes/coldGray';

const Nav = () => {
    return(
        <ThemeProvider theme={coldGray}>
            <AppBar style={{position:'static'}}>
            <Toolbar>
            <Bar size={35} />
            <Link to='/about'><Button variant='menu'>About</Button></Link>
            <Link to='/shop'><Button variant='menu'>Shop</Button></Link>
            <Bar size={35} />
            </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
}

export default Nav;
