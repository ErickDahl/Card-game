import Main from "./Main/Main";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import { usePageContext } from "../components/context/PagesContext";

const App = () => {
  const { page } = usePageContext();

  return <Main>{page ? <SecondPage /> : <FirstPage />}</Main>;
};

export default App;
