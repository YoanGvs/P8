import { useState, useRef, useEffect } from "react";
import arrow from '../assets/arrow.svg'; // replace with the actual path to your image

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const contentId = "uniqueContentId";

  return (
    <div className="collapsible">
      <div
        className="collapsible-header"
        onClick={toggleOpen}
      >
        {title}
        <img src={arrow} alt="arrow" className={`collapsible-icon ${isOpen ? "open" : ""}`} />
      </div>
      <div id={contentId} className={`collapsible-content ${isOpen ? "open" : ""}`} ref={contentRef} style={{ height: `${height}px` }}>
        <div className="collapsible-inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;