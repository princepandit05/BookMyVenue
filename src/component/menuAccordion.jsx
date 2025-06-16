import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MenuAccordion = ({ menutype, menuoption }) => {
  const [Isopen, setIsopen] = useState(false);

  return (
    <>
      <div className="menu-details">
        <section className="sectionpage">
          <div className="sectin-data">
            <span className="menutype">{menutype}</span>
            <button onClick={() => setIsopen(!Isopen)}>
              <span>
                {Isopen ? (
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      size="2x"
                      padding="3px"
                    />
                  </div>
                ) : (
                  <div className="icon">
                    {" "}
                    <FontAwesomeIcon icon={faCaretUp} size="2x" padding="3px" />
                  </div>
                )}
              </span>
            </button>
          </div>
          {Isopen ? (
            <div>
              {menuoption.map((ele) => (
                <li className="list-item">{ele.name}</li>
              ))}
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
};

export default MenuAccordion;
