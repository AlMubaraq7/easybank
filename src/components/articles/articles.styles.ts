import styled from "styled-components";
export const Container = styled.section`
  height: min-content;
  background-color: var(--lightergrey);
`;
export const GridContainer = styled.div`
  padding: 5rem 7.5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px min-content;
  grid-row-gap: 1.5rem;
  @media only screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 8.5rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 2rem 5.5rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 2rem 4rem;
  }
  @media only screen and (max-width: 360px) {
    padding: 2rem;
  }
`;
export const Heading = styled.h1`
  font-size: 35px;
  font-weight: 300;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  @media only screen and (max-width: 1300px) {
    place-self: center;
  }
  @media only screen and (max-width: 360px) {
    font-size: 30px;
    place-self: center;
  }
`;
export const ArticleContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1.5rem;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-row-gap: 1.5rem;
  }
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-row-gap: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    grid-column-gap: unset;
    grid-row-gap: 1.5rem;
  }
`;
export const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
`;
export const ArticleImageBox = styled.div`
  flex: 1 1 0;
`;
export const ArticleTextBox = styled.div`
  padding: 1.5rem 1.25rem;
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const ArticleImage = styled.img`
  object-fit: cover;
  aspect-ratio: 128 / 85;
`;
export const ArticleTextAuthor = styled.span`
  font-size: 14px;
  color: var(--grey);
  @media only screen and (max-width: 1300px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 15px;
  }
`;
export const ArticleTextTitle = styled.h3`
  cursor: pointer;
  font-weight: 300;
  line-height: 1.2;
  &:hover {
    color: var(--green);
  }
  @media only screen and (max-width: 1300px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;
export const ArticleTextParagraph = styled.p`
  color: var(--grey);
  font-size: 13.25px;
  @media only screen and (max-width: 1300px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 14px;
  }
`;
