import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles/colors';

const NavBar = styled.nav`
  background-color: ${colors.navbar};
  color: ${colors.textNavbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.textNavbar};
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;

  li a {
    text-decoration: none;
    color: ${colors.textNavbar};
    font-weight: 500;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

const Navbar = () => (
  <NavBar>
    <NavTitle>Archistore</NavTitle>
    <NavLinks>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/client">Dashboard</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </NavLinks>
  </NavBar>
);

export default Navbar;