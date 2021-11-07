import Navigation from "../components/Navigation";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center items-center font-display">
        <button className="w-40 rounded-xl shadow-xl p-4 m-2 transition-colors hover:bg-green-500 bg-green-400 text-green-100">
          Create
        </button>
      </div>
    </div>
  );
};

export default HomePage;
