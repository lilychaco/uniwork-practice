import React from "react";
import { Provider } from "react-redux";

import Calender from "../CalenderModule";
import store from "../stores";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Calender />
    </Provider>
  );
};

export default App;
