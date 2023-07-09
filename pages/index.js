import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Dashboard from "./dashboard";
import reducer from "./Reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { SkeletonTheme } from "react-loading-skeleton";


export default function Home() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <SkeletonTheme baseColor="#db631f" highlightColor="#444">
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </SkeletonTheme>
  );
}
