import Header from "../components/Header";
import Title from "../components/common/Title";
import ReactIcon from "../components/common/icons/ReactIcon";
import ReduxIcon from "../components/common/icons/ReduxIcon";

const ReduxPage = () => {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-1 gap-y-4 pt-4">
        <Title icon={<ReduxIcon />} title="React Redux & Redux Toolkit" />
      </div>
    </div>
  );
};

export default ReduxPage;
