import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  height: 500px;
  background-color: var(--lightergrey);
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    height: 400px;
  }
  @media only screen and (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 5rem;
    height: 650px;
  }
`;
export const BgImage = styled.img`
  aspect-ratio: 1 / 1;
  max-width: 65%;
  position: absolute;
  top: -15rem;
  right: -10rem;
  @media only screen and (max-width: 1024px) {
    max-width: 70%;
    top: -35%;
    right: -15%;
  }
  @media only screen and (max-width: 640px) {
    max-width: 650px;
    right: -7.75rem;
    top: -21.5rem;
  }
  @media only screen and (max-width: 400px) {
    max-width: 570px;
    right: -7rem;
    top: -17rem;
  }
`;

export const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextBox = styled(Box)`
  @media only screen and (max-width: 1000px) {
    justify-content: unset;
    margin-top: 3rem;
  }
  @media only screen and (max-width: 640px) {
    flex: 2;
  }
`;

export const TextContainer = styled.div`
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
  @media only screen and (max-width: 640px) {
    max-width: 67%;
    text-align: center;
    gap: 1.5rem;
  }
`;
export const Heading = styled.h1`
  font-size: 45px;
  font-weight: 300;
  line-height: 1.2;
  @media only screen and (max-width: 1024px) {
    font-size: calc(3.25vw + 0.5rem);
  }
  @media only screen and (max-width: 640px) {
    font-size: calc(6.25vw + 0.5rem);
  }
`;
export const Paragraph = styled.p`
  color: var(--grey);
  font-size: 18px;
  font-weight: 300;
  @media only screen and (max-width: 1024px) {
    font-size: calc(1.25vw + 0.5rem);
  }
  @media only screen and (max-width: 640px) {
    font-size: calc(2vw + 0.5rem);
  }
`;
export const InviteBtn = styled.span`
  cursor: pointer;
  color: var(--white);
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  background: var(--gradient);
  align-self: flex-start;
  transition: opacity 150ms linear;
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 640px) {
    align-self: unset;
    font-size: calc(1.75vw + 0.5rem);
  }
`;
