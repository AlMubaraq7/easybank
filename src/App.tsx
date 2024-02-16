import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import Why from "./components/why/why.component";
import Articles from "./components/articles/articles.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
