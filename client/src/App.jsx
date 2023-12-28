import React from "react";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Body />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
