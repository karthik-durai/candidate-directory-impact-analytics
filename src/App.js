import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import store from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={createStore(store)}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
