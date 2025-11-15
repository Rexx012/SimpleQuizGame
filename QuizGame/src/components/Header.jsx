const Header = ({ onStartGame }) => {
  return (
    <header className="flex flex-col items-center gap-10">
      <h1 className="text-black text-5xl md:text-6xl font-heading text-center">
        Quiz Game!
      </h1>
      <button
        className=" cursor-pointer text-2xl md:text-3xl font-body border border-black-600 py-2 px-5 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-300"
        onClick={onStartGame}
      >
        Start
      </button>
    </header>
  );
};

export default Header;
