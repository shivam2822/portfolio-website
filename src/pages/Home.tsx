import MainHero from "../components/MainHero";
import ReactHero from "../components/ReactHero";
import ReactNativeHero from "../components/ReactNativeHero";
import WordPressHero from "../components/WordPressHero";

const Home = () => {
  return (
    <>
      <main>
        <MainHero />
        <ReactHero />
        <ReactNativeHero />
        <WordPressHero />
      </main>
    </>
  );
};

export default Home;
