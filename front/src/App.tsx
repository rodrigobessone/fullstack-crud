import 'react-toastify/dist/ReactToastify.css';
import RoutesMain from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/globalStyles";


const App = () => {
  return (
    <>
      <RoutesMain />
      <GlobalStyle />
    </>
  );
}

export default App;