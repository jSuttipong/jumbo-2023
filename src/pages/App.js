import React, { useState, useEffect } from "react";
import "../assets/scss/App.scss";
import Carousel from "../components/Carousel";
function App() {
  const objects = [
    { item: 1, name: "obj1" },
    { item: 2, name: "obj2" },
    { item: 3, name: "obj3" },
    { item: 4, name: "obj4" },
    { item: 5, name: "obj5" },
    { item: 6, name: "obj6" },
    { item: 7, name: "obj7" },
  ];

  const [windowWidthSize, setWindowWidthSize] = useState([window.innerWidth]);
  const [objSize, setObjSize] = useState(5);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidthSize < 576) {
      setObjSize(2);
    } else if (windowWidthSize < 768) {
      setObjSize(3);
    }else if (windowWidthSize < 992) {
      setObjSize(4);
    }else if (windowWidthSize < 1200) {
      setObjSize(5);
    }

    return;
  }, [windowWidthSize]);

  return (
    <div className="App">
      <div className="Nav">
        <h1>All MY PROJECTS</h1>
      </div>
      <div className="ctn-carousel">
        <Carousel objects={objects} objSize={objSize} />
      </div>
    </div>
  );
}

export default App;
