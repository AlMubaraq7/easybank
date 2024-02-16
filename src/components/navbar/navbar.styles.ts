import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: var(--white);
  @media only screen and (max-width: 640px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  @media only screen and (max-width: 640px) {
    margin-left: 2rem;
  }
`;
export const LinkContainer = styled.div<{ $active: boolean }>`
  display: flex;
  height: inherit;
  gap: 1.75rem;
  align-items: center;
  background-color: none;
  @media only screen and (max-width: 768px) {
    gap: 0.75rem;
  }
  @media only screen and (max-width: 640px) {
    display: ${(props) => (props.$active ? "flex" : "none")};
    background-color: white;
    box-shadow: 0px 150px 250px -15px rgba(45, 49, 77, 0.82);
    flex-direction: column;
    width: 85vw;
    position: fixed;
    top: 6rem;
    left: 8.5%;
    padding: 1.75rem 0;
    border-radius: 5px;
    height: min-content;
    gap: 1.25rem;
  }
`;
export const Link = styled.span`
  height: inherit;
  position: relative;
  padding: 1.75rem 0;
  color: var(--grey);
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-image: var(--gradient);
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  &:hover::after {
    opacity: 1;
  }
  @media only screen and (max-width: 640px) {
    padding: 0 0;
    color: black;
    font-size: 1.2rem;
    padding-bottom: 0.2rem;
  }
`;

export const InviteBtn = styled.span`
  cursor: pointer;
  color: var(--white);
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  background: var(--gradient);
  transition: opacity 150ms linear;
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const Bar = styled.div`
  height: 3px;
  width: 35px;
  background-color: var(--grey);
  transition: all 150ms linear;
`;

export const Hamburger = styled.div<{ $active: boolean }>`
  display: none;
  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 2rem;
    cursor: pointer;
    & ${Bar}:nth-child(2) {
      opacity: ${(props) => (props.$active ? "0" : "1")};
    }
    & ${Bar}:nth-child(1) {
      transform: ${(props) =>
        props.$active
          ? "translateY(11px) rotate(45deg)"
          : "translateY(0deg) rotate(0deg)"};
    }
    & ${Bar}:nth-child(3) {
      transform: ${(props) =>
        props.$active
          ? "translateY(-11px) rotate(-45deg)"
          : "translateY(0deg) rotate(0deg)"};
    }
  }
`;
