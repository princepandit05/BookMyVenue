import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MenuAccordion = ({ menutype, menuoption }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="accordion">
        <section className="accordion__section">
          <div className="accordion__header">
            <span className="accordion__title">{menutype}</span>
            <button className="accordion__toggle" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon
                icon={isOpen ? faCaretDown : faCaretUp}
                size="2x"
              />
            </button>
          </div>
          {isOpen && (
            <ul className="accordion__list">
              {menuoption.map((ele) => (
                <li key={ele.name} className="accordion__list-item">{ele.name}</li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default MenuAccordion;
