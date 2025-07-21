import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaBookReader } from "react-icons/fa";

const NavbarContainer = styled.nav`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  width: 100%;
  z-index: 100;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem;
    min-height: auto;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #5b3cc4;
  text-decoration: none;
  svg {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  color: #374151;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &.active {
    background: #5b3cc4;
    color: white;
  }
  &:hover {
    background: #433099;
    color: white;
  }
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    border-radius: 6px;
    width: 100%;
    text-align: left;
  }
`;

const CreateButton = styled.button`
  background: #5b3cc4;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: "Futura", "Arial", sans-serif;
  cursor: pointer;
  margin-left: 1rem;
  transition: background 0.3s;
  &:hover {
    background: #432a9c;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
    font-size: 1.1rem;
    padding: 0.75rem 1rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #374151;
  @media (max-width: 768px) {
    display: block;
    align-self: flex-end;
    margin-top: 0.5rem;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 99;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
    setIsOpen(false);
  };
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <NavContent>
        <Logo>
          <FaBookReader />
          EduCircle
        </Logo>
        <NavLinks>
          <StyledNavLink onClick={() => handleNav("/home")}>Home</StyledNavLink>
          <StyledNavLink onClick={() => handleNav("/groups")}>
            Study Groups
          </StyledNavLink>
          <StyledNavLink onClick={() => handleNav("/resources")}>
            Resources
          </StyledNavLink>
          <StyledNavLink onClick={() => handleNav("/schedule")}>
            Schedule
          </StyledNavLink>
          <CreateButton onClick={() => handleNav("/meeting")}>
            Create Meeting
          </CreateButton>
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContent>
      {isOpen && (
        <MobileMenu>
          <StyledNavLink onClick={() => handleNav("/home")}>Home</StyledNavLink>
          <StyledNavLink onClick={() => handleNav("/groups")}>
            Study Groups
          </StyledNavLink>
          <StyledNavLink onClick={() => handleNav("/resources")}>
            Resources
          </StyledNavLink>
          <StyledNavLink onClick={() => handleNav("/schedule")}>
            Schedule
          </StyledNavLink>
          <CreateButton onClick={() => handleNav("/meeting")}>
            Create Meeting
          </CreateButton>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
