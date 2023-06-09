import { createRoot } from "react-dom/client";
import PortfolioPage from "./pages/PortfolioPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JavascriptPage from "./pages/JavascriptPage";
import { Provider } from "react-redux";
import store from "./store";
import ReactPage from "./pages/ReactPage";
import ReduxPage from "./pages/ReduxPage";
import GitPage from "./pages/GitPage";
import ReactHooksPage from "./pages/ReactHooks";
import ReactMyComponents from "./pages/ReactMyComponents";
import ReactMyComponentsIcon from "./pages/ReactMyComponentsIcon";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/javascript" element={<JavascriptPage />} />
          <Route path="/react/:id" element={<ReactPage />} />
          <Route path="/react/hooks" element={<ReactHooksPage />} />
          <Route path="/react/my-components" element={<ReactMyComponents />} />
          <Route
            path="/react/my-components/icon"
            element={<ReactMyComponentsIcon />}
          />
          <Route path="/redux/" element={<ReduxPage />} />
          <Route path="/git/" element={<GitPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
