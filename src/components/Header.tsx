import me from "../data/Me.json";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center bg-main">
        <div className="sm:w-5/6 lg:w-max-app">
          <h1 className="text-white">{me.name}</h1>
          <h1 className="text-white">{me.lastName}</h1>
          <h6 className="text-white">{me.role}</h6>
          <p className="text-white">{me.description}</p>
        </div>
      </div>
      <div className="h-14 bg-secondary"></div>
    </div>
  );
};

export default Header;
