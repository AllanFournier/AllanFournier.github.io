import "./App.css";
import Menu from "./components/Menu";
import FeaturesCards from "./components/FeaturesCards";
import FooterSocial from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <section className="min-h-screen">
          <Menu />
          <div className="p-10 py-10 text-center">
            <h2 className="font-mediu py-2 text-5xl md:text-6xl">Allan Fournier</h2>
            <h3 className="py-2 text-2xl md:text-3xl dark:text-white">Développeur FullStack</h3>
            <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200">
              Développeur FullStack depuis 3 ans et toujours à la recherche de nouveaux challenges.
            </p>
          </div>
          <FeaturesCards />
        </section>
      </main>
      <footer>
        <FooterSocial />
      </footer>
    </>
  );
}

export default App;
