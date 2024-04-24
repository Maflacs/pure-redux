import React from "react";
import Counter from "./component/Counter";
import { legacy_createStore as createStore } from "redux";
import counterReducer from "./redux/counter";
import { Provider } from "react-redux";

const App = () => {
  const store = createStore(counterReducer);
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
