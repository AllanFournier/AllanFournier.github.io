const Menu = () => {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 flex items-center justify-between bg-transparent px-20 py-4">
      <div className="text-3xl font-bold text-black">Allan</div>
      <div>
        <a href="#" className="mr-8 text-lg font-bold  hover:text-blue-700">
          Accueil
        </a>
        <a href="#" className="mr-8 text-lg font-bold  hover:text-yellow-500">
          Projets
        </a>
        <a href="#" className="mr-8 text-lg font-bold  hover:text-yellow-500">
          Moi
        </a>
      </div>
    </nav>
  );
};

export default Menu;
