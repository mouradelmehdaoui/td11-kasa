import React, { useState } from 'react';
import items from '../../service/DataService'; 
import { Collapse, Button } from 'react-bootstrap';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

  const [openId, setOpenId] = useState(null);

  console.log("openIdBefore = ",openId);

  const handleToggle = (itemId) => {

    console.log("openIdAfterClick = ",openId);
    console.log("itemId = ",itemId);
    if (openId === itemId) {
      setOpenId(null);
      console.log('je suis egaliter openid et item id');
    } else {
      setOpenId(itemId);
      console.log('je suis ds set ItemID');
    }
  };

  return (
    <div className="container feature-list">
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Button
              variant="link"
              onClick={() => handleToggle(item.id)}
              aria-controls={`collapse-${item.id}`}
              aria-expanded={openId === item.id}
              className="btn-block text-left feature-button"
            >
              {item.title}
              <FontAwesomeIcon icon={openId === item.id ? faArrowUp : faArrowDown} />
            </Button>
            <Collapse in={openId === item.id}>
              <div id={`collapse-${item.id}`} className="feature-text">
                <p>{item.text}</p>
              </div>
            </Collapse>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default About;