const Menu = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between bg-transparent px-20 py-4">
      <div className="text-3xl font-bold text-white">Allan</div>
      <div>
        <a href="#" className="mr-8 text-lg font-bold text-white hover:text-blue-700">
          Accueil
        </a>
        <a href="#" className="mr-8 text-lg font-bold text-white hover:text-yellow-500">
          Projets
        </a>
        <a href="#" className="mr-8 text-lg font-bold text-white hover:text-yellow-500">
          Moi
        </a>
      </div>
    </nav>
  );
};

export default Menu;
