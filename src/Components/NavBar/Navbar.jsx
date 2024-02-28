import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Assuming your styles are in a separate CSS file

const Navbar = () => {
  const [expand, setExpanded] = useState(false);

  const expandSearch = () => {
    setExpanded(!expand);
  };

  const searchClass = `search ${expand ? 'expanded' : ''}`;

  return (
    <div className={expand ? 'expanded' : ''}>
      <div className={`navbar-1 ${expand ? 'nav-1' : ''}`}>
        <div className="symbol">|| जय श्री राम ||</div>
        <div className="navLinks">
          <span>Ram Mandir Darshan</span>
          <span>Ram Mandir Aarti</span>
          <span>Ayodhya City</span>
          <span>Planning</span>
          <span>Ayodhya News</span>
          <span className="d-inline-block" onClick={expandSearch}>
            <img src="./images/icons/search.png" alt="" className="img-fluid" style={{ width: '30px', height: '30px' }} />
          </span>
        </div>
      </div>
      {/* <div className={searchClass}>
        <div className="searchBox form__group field">
          <input type="input" className="form__field" placeholder="Name" ></input>
          <label  className="form__label">Name</label>
        </div>
          <button className="button"> Hey, Hover Me</button>
      </div> */}
    </div>
  );
}

export default Navbar;
