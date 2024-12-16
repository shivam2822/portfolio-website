// import MainHero from "./components/MainHero";
// import ReactHero from "./components/ReactHero";
// import ReactNativeHero from "./components/ReactNativeHero";
// import WordPressHero from "./components/WordPressHero";
// import Footer from "./layout/Footer";

// function App() {
//   return (
//     <main>
//       <MainHero />
//       <ReactHero />
//       <ReactNativeHero />
//       <WordPressHero />
//       <Footer />
//     </main>
//   );
// }

// export default App;

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
