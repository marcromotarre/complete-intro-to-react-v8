import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LateralMenu from "../components/common/lateral-menu/LateralMenu";

const InformationLayout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[300px_auto]">
        <div className="h-screen overflow-y-scroll">
          <LateralMenu />
        </div>
        <div className="h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default InformationLayout;
