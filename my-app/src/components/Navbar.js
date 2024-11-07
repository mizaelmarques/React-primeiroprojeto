import React from 'react';
import styled from 'styled-components';

// Componente Navbar
const Navbar = () => {
  return (
    <Nav>
      <Logo href="#">Mizael Marques</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #4CAF50; /* Cor de fundo */
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 18px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #FFD700; /* Cor ao passar o mouse */
  }
`;

export default Navbar;
