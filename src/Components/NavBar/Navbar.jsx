import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Assuming your styles are in a separate CSS file

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleClicked = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="navbar-1">
      {mobile ? (
        <>
          <div className="symbol">|| जय श्री राम ||</div>
          <div className="toggle" onClick={toggleClicked}>
            <img
              src={toggle? "./images/icons/close.png" : "./images/icons/menu.png"}
              alt=""
              className="img-fluid"
              style={{ width: '30px', height: '30px'}}
            />
          </div>
        </>
      ) : (
        <>
          <div className="symbol">|| जय श्री राम ||</div>
          <div className="navLinks">
            <span>Ram Mandir Darshan</span>
            <span>Ram Mandir Aarti</span>
            <span>Ayodhya City</span>
            <span>Planning</span>
            <span>Ayodhya News</span>
            <span className="d-inline-block">
              <img
                src="./images/icons/search.png"
                alt=""
                className="img-fluid"
                style={{ width: '30px', height: '30px' }}
              />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
