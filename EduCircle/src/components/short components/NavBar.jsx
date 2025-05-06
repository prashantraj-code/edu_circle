import { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaBookReader } from "react-icons/fa";

const NavbarContainer = styled.nav`
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: background 0.3s;

  &.active {
    background: #5b3cc4;
    color: white;
  }

  &:hover {
    background: #f3f4f6;
  }
`;

const CreateButton = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  background: #5b3cc4;
  color: white;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #433099;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #374151;

  @media (max-width: 768px) {
    display: block;
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

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <NavContent>
        <Logo>
          <FaBookReader />
          EduCircle
        </Logo>
        <NavLinks>
          <StyledNavLink onClick={() => {}}>
            Home
          </StyledNavLink>
          <StyledNavLink onClick={() => {}}>Study Groups</StyledNavLink>
          <StyledNavLink onClick={() => {}}>Resources</StyledNavLink>
          <StyledNavLink onClick={() => {}}>Schedule</StyledNavLink>
          <CreateButton onClick={() => {}}>Create Group</CreateButton>
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContent>
      {isOpen && (
        <MobileMenu>
          <StyledNavLink>
            Home
          </StyledNavLink>
          <StyledNavLink>
            Study Groups
          </StyledNavLink>
          <StyledNavLink>
            Resources
          </StyledNavLink>
          <StyledNavLink>
            Schedule
          </StyledNavLink>
          <CreateButton>
            Create Group
          </CreateButton>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
