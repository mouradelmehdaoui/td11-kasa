import React, { useState } from 'react';
import items from '../../service/DataService'; 
import { Collapse, Button } from 'react-bootstrap';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

  const [openId, setOpenId] = useState(null);
  const handleToggle = (itemId) => {
    if (openId === itemId) {
      setOpenId(null);
    } else {
      setOpenId(itemId);
    }
  };

  return (
    <div className='container'>
 
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Button
              variant="link"
              onClick={() => handleToggle(item.id)}
              aria-controls={`collapse-${item.id}`}
              aria-expanded={openId === item.id}
              className="btn-block text-left"
              style={{
                backgroundColor: 'orange',
                color: 'white',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                textDecoration: 'none',
                width: '1023px',
                height: '47px', // Set height
                top: '776px', // Set top position
                left: '208px', // Set left position
                borderRadius: '10px', // Set border radius
                
              }}
            >
              {item.title}
              <FontAwesomeIcon icon={openId === item.id ? faArrowUp : faArrowDown} />
            </Button>
            <Collapse in={openId === item.id}>
              <div id={`collapse-${item.id}`}>
                <p
                style={{
                  width: '1023px', // Set width
                  height: '184px', // Set height
                  top: '408px', // Set top position
                  left: '208px', // Set left position
                }}>{item.text}</p>
              </div>
            </Collapse>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default About;