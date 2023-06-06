import me from "../data/Me.json";
import portfolioImage from "../icons/portfolio.jpg"; // Tell webpack this JS file uses this image

const Header = () => {
  return (
    <div>
      <div className="flex justify-center bg-main ">
        <div className="grid grid-cols-[200px_auto] gap-x-10 p-4">
          <div className="flex items-center justify-center">
            <div className=" absolute h-halo-1 w-halo-1 rounded-full border-2"></div>
            <div className=" absolute h-halo-2 w-halo-2 rounded-full border-2"></div>
            <img
              className=" absolute  h-image-portfolio w-image-portfolio rounded-full"
              src={portfolioImage}
            ></img>
          </div>
          <div className="info-width grid grid-cols-1 gap-y-3">
            <div className="flex">
              <h1 className="text-6xl font-bold text-white">{me.name}</h1>
              <h1 className="pl-2 text-6xl font-thin text-white">
                {me.lastName}
              </h1>
            </div>

            <h6 className="text-xl font-thin text-white">{me.role}</h6>
            <div className="h-px w-full bg-white"></div>
            <p className="font-thin text-white">{me.description}</p>
          </div>
        </div>
      </div>
      <div className="h-14 bg-secondary"></div>
    </div>
  );
};

export default Header;
