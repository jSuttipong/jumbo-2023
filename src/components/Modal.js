import React, { useState, useEffect, useRef } from "react";
import "../assets/scss/modal.scss";
// import closeSVG from '../assets/svgs/close.svg';
import { ReactComponent as CloseSVG } from "../assets/svgs/close.svg";
import { ReactComponent as APIIcon } from "../assets/svgs/api.svg";
import { ReactComponent as BootstrapIcon } from "../assets/svgs/bootstrap.svg";
import { ReactComponent as ChartIcon } from "../assets/svgs/chart.svg";
import { ReactComponent as DatabaseIcon } from "../assets/svgs/database.svg";
import { ReactComponent as GoogleDevIcon } from "../assets/svgs/google-dev.svg";
import { ReactComponent as NodeIcon } from "../assets/svgs/node-js.svg";
import { ReactComponent as NuxtIcon } from "../assets/svgs/nuxt.svg";
import { ReactComponent as SlideIcon } from "../assets/svgs/slider.svg";
import { ReactComponent as VueIcon } from "../assets/svgs/vue.svg";

const Modal = ({ modalData, onClose }) => {
  const [title, setTitle] = useState("");
  const [folioImages, setFolioImages] = useState([]);
  const [description, setDescription] = useState("");
  const [imageSrcActive, setImageSrcActive] = useState("");
  // const [isActive, setIsActive] = useState(false);
  const [webStack, setWebStack] = useState([]);
  const containerRef = useRef(null);
  const scrollRef = useRef({ isMouseDown: false, startX: 0, scrollLeft: 0 });

  // useEffect(() => {
  //   handelModalData();
  // });

  // useEffect(() => {
  //   handelModalData();

  //   return;
  // });
  useEffect(() => {
    handelModalData();

    return;
  }, []);

  const handelImages = (images) => {
    const imageUrl = images.map((element, index) => ({
      src: require("../assets/images/" + element),
      key: index.toString(),
      isActive: index === 0 ? true : false
    }));
    // console.log(imageUrl);
    if (imageUrl) {
      if (imageUrl[0]) {
        hendleBigImage(imageUrl[0].src);
        // hendleThumbnailActive(imageUrl[0].key);
      }
    }
    setFolioImages(imageUrl);
  };
  const handelStackIcon = (stack,index) => {
    if (stack === "Vue") {
      return <VueIcon key={index} className="stack-icon" />;
    }
    if (stack === "Nuxt") {
      return <NuxtIcon key={index} className="stack-icon" />;
    }
    if (stack === "Node") {
      return <NodeIcon key={index} className="stack-icon" />;
    }
    if (stack === "Boostrap") {
      return <BootstrapIcon key={index} className="stack-icon" />;
    }
    if (stack === "Apexchart") {
      return <ChartIcon key={index} className="stack-icon" />;
    }
    if (stack === "API") {
      return <APIIcon key={index} className="stack-icon" />;
    }
    if (stack === "SQL") {
      return <DatabaseIcon key={index} className="stack-icon" />;
    }
    if (stack === "Fullpage") {
      return <SlideIcon key={index} className="stack-icon" />;
    }
    if (stack === "Google API") {
      return <GoogleDevIcon key={index} className="stack-icon" />;
    }
  };
  const handelModalData = () => {
    if (modalData) {
      if (modalData.name) {
        setTitle(modalData.name);
      }
      if (modalData.images) {
        handelImages(modalData.images);
      }
      if (modalData.des) {
        setDescription(modalData.des);
      }
      if (modalData.stack) {
        setWebStack(modalData.stack);
      }
    }
  };
  const hendleBigImage = (imageSrc) => {
    setImageSrcActive(imageSrc);
    
  };
  const hendleThumbnailActive = (imgKey) => {
    const updatedItems = folioImages.map(item => {
      if (item.key === imgKey) {
        return { ...item, isActive: true };
      }
      else{
        return { ...item, isActive: false };
      }
    });
    setFolioImages(updatedItems);
  }

  const getActiveClass = (isActive) => {
    return isActive ? 'active' : 'inactive';
  };

  const handleMouseDown = (event) => {
    scrollRef.current.isMouseDown = true;
    scrollRef.current.startX = event.pageX - containerRef.current.offsetLeft;
    scrollRef.current.scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    scrollRef.current.isMouseDown = false;
  };

  const handleMouseMove = (event) => {
    if (!scrollRef.current.isMouseDown) return;

    event.preventDefault();
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - scrollRef.current.startX) * 2;
    containerRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
  };

  return (
    <div className="ctn-modal d-flex justify-content-center align-items-center">
      <div className="modal-box container">
        <div
          onClick={onClose}
          className="close-modal d-flex justify-content-center align-items-center"
        >
          <CloseSVG className="close-svg-icon" />
        </div>
        <h2 className="pt-3">{title}</h2>
        <p>Category : {description}</p>
        <div className="my-2">
          {webStack.map((stack,index) => handelStackIcon(stack,index))}
        </div>
        <div className="box-images">
          <div className="ctn-big-image mb-3">
            <img src={imageSrcActive} alt="folio active" />
          </div>

          <div
            className="ctn-thumbnail scrollable-container pt-3"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {folioImages.map((image) => (
              <img
                key={image.key}
                src={image.src}
                alt="folio"
                className={`images-thumbnail mx-1  ${getActiveClass(image.isActive)}`}
                onClick={() => {hendleBigImage(image.src); hendleThumbnailActive(image.key)}}
              />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
