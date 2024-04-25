import React from "react";
import Counter from "./component/Counter";
import { Provider } from "react-redux";
import { store } from "./redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
