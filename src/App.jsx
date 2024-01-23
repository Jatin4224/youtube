// App.js
import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
        {/* Other components */}
      </div>
    </Provider>
  );
}

export default App;
