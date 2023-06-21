import React, { useState, useEffect } from "react";
import "../assets/scss/App.scss";
import Carousel from "../components/Carousel";
import Modal from "../components/Modal";
import folioJson from "../json/folio.json";
function App() {
  const [windowWidthSize, setWindowWidthSize] = useState([window.innerWidth]);
  const [objSize, setObjSize] = useState(5);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [modalData, setmodalData] = useState(null);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleModal = (data) => {
    setIsActiveModal(true);
    setmodalData(data);
  };

  useEffect(() => {
    if (windowWidthSize < 576) {
      setObjSize(2);
    } else if (windowWidthSize < 768) {
      setObjSize(3);
    } else if (windowWidthSize < 992) {
      setObjSize(4);
    } else if (windowWidthSize < 1200) {
      setObjSize(5);
    }

    return;
  }, [windowWidthSize]);


  return (
    <div className="App">
      {isActiveModal && (
          <Modal onClose={() => setIsActiveModal(false)} modalData={modalData} />
      )}
      <div className="Nav">
        <h1>All MY PROJECTS</h1>
      </div>
      <div className="ctn-carousel">
        <Carousel
          objects={folioJson}
          objSize={objSize}
          handleModal={handleModal}
        />
      </div>
    </div>
  );
}

export default App;
