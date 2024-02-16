import {
  Container,
  GridContainer,
  Heading,
  ArticleContainer,
  ArticleBox,
  ArticleImageBox,
  ArticleImage,
  ArticleTextBox,
  ArticleTextAuthor,
  ArticleTextTitle,
  ArticleTextParagraph,
} from "./articles.styles";
import Currency from "../../assets/image-currency.jpg";
import Restaurant from "../../assets/image-restaurant.jpg";
import Plane from "../../assets/image-plane.jpg";
import Confetti from "../../assets/image-confetti.jpg";

const Articles = () => {
  return (
    <Container>
      <GridContainer>
        <Heading>Latest Articles</Heading>
        <ArticleContainer>
          <ArticleBox>
            <ArticleImageBox>
              <ArticleImage src={Currency} />
            </ArticleImageBox>
            <ArticleTextBox>
              <ArticleTextAuthor>By Claire Robinson</ArticleTextAuthor>
              <ArticleTextTitle>
                Receive money in any currency with no fees
              </ArticleTextTitle>
              <ArticleTextParagraph>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </ArticleTextParagraph>
            </ArticleTextBox>
          </ArticleBox>
          <ArticleBox>
            <ArticleImageBox>
              <ArticleImage src={Restaurant} />
            </ArticleImageBox>
            <ArticleTextBox>
              <ArticleTextAuthor>By Wilson Hutton</ArticleTextAuthor>
              <ArticleTextTitle>
                Treat yourself without worrying about money
              </ArticleTextTitle>
              <ArticleTextParagraph>
                {" "}
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </ArticleTextParagraph>
            </ArticleTextBox>
          </ArticleBox>
          <ArticleBox>
            <ArticleImageBox>
              <ArticleImage src={Plane} />
            </ArticleImageBox>
            <ArticleTextBox>
              <ArticleTextAuthor>By Wilson Hutton</ArticleTextAuthor>
              <ArticleTextTitle>
                {" "}
                Take your Easybank card wherever you go
              </ArticleTextTitle>
              <ArticleTextParagraph>
                {" "}
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </ArticleTextParagraph>
            </ArticleTextBox>
          </ArticleBox>
          <ArticleBox>
            <ArticleImageBox>
              <ArticleImage src={Confetti} />
            </ArticleImageBox>
            <ArticleTextBox>
              <ArticleTextAuthor>By Claire Robinson</ArticleTextAuthor>
              <ArticleTextTitle>
                Our invite-only Beta accounts are now live!
              </ArticleTextTitle>
              <ArticleTextParagraph>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </ArticleTextParagraph>
            </ArticleTextBox>
          </ArticleBox>
        </ArticleContainer>
      </GridContainer>
    </Container>
  );
};

export default Articles;
