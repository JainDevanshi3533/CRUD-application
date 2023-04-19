import React from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
background:#111111;
`;

const Tabs = styled(NavLink)`
color:white;
text-decoration:none;
    font-size:20px;
    margin-right:20px;
`;

const Navbar = () => {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>MyApp</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar