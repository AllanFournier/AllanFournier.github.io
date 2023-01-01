import "./App.css";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ">
        <Menu />
        <div className="p-10 py-10 text-center">
          <h2 className="font-mediu py-2 text-5xl md:text-6xl">Allan Fournier</h2>
          <h3 className="py-2 text-2xl dark:text-white md:text-3xl">Développeur FullStack</h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl">
            Développeur FullStack depuis 3 ans toujours à la recherche de nouveaux challenges.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
