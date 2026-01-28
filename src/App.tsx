import { useEffect, useState } from "react";
import Header from "./components/Header.tsx";
import NoteSingle from "./components/NoteSingle.tsx";
const App = () => {
  return (
    <main>
      <div className="wrapper">
        <Header></Header>
        <div className="content-wrapper">
          <NoteSingle></NoteSingle>
        </div>
      </div>
    </main>
  );
};

export default App;
