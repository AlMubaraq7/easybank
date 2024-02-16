import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.section`
  background-color: var(--darkblue);
  height: min-content;
`;
export const GridContainer = styled.div`
  padding: 3.75rem 8rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2.5fr;
  grid-template-rows: 100px;
  height: inherit;
  @media only screen and (max-width: 1024px) {
    padding: 3.5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 1rem 0rem;
    grid-template-rows: 2fr 1fr 1fr 2.5fr;
    grid-row-gap: 0.75rem;
  }
`;
export const Socials = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const SocialLogoBox = styled.div`
  width: inherit;
`;
export const SocialLogo = styled.img`
  object-fit: cover;
`;
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  @media only screen and (max-width: 768px) {
    gap: 1rem;
  }
`;
export const SocialSvg = styled(SVG)`
  cursor: pointer;
  &:hover {
    & path {
      fill: var(--green);
    }
  }
`;
export const NavLinks1 = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    align-items: center;
    gap: 0.75rem;
  }
`;
export const NavLinks2 = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    align-items: center;
    gap: 0.75rem;
  }
`;
export const NavLink = styled.span`
  cursor: pointer;
  font-weight: 300;
  color: var(--white);
  transition: all 150ms linear;
  &:hover {
    color: var(--green);
  }
`;
export const Invite = styled.div`
  grid-column: 4 / 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const InviteBtn = styled.span`
  cursor: pointer;
  color: var(--white);
  font-weight: 500;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  background: var(--gradient);
  transition: opacity 150ms linear;
  &:hover {
    opacity: 0.8;
  }
`;

export const Copyright = styled.span`
  color: var(--grey);
`;
