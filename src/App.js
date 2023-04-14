
import Head from "./components/pages/Head";
import Footer from "./components/common/Footer";
import Show from "./components/pages/Show";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const recive = (img) => {
    setData(img);
  };

  useEffect(() => {
    if (data !== "") {
      navigate("show");
    }
  }, [data]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Head abc={recive} />} />
        <Route path="show" element={<Show img={data} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
