import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="green-footer">
      <div className="footer-section">
        <h4>Explore</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Question</a>
          </li>
          <li>
            <a href="#">Article</a>
          </li>
          <li>
            <a href="#">Tutorials</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
        </ul>
      </div>
      <div className="sm-section">
        <h4>Stay Connected</h4>
        <ul>
          <li>
          <a href="#">
              <img src="data:image/png;base64,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" alt="Instagram" style={{ width: '50px', height: '50px' }}/>
            </a>
          </li>
          <li>
          <a href="#">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8Yd/Lx9/4NevLq8/4TdfIAcfIwhPOMt/gAc/KZwPl7rfcAcPGmyPn3+/8Ad/KEs/jh7f210vrm8f5zqfetzfo4i/Ta6f3M4fy+2PvR5P1ioPZHkPQyhvMifvNRlfWjxvpdmvVpovbF3Py61fvuyFcWAAADaklEQVR4nO3bWW+jMBiF4QZilkCALJCFhDTT/v/fOCHdNJoSjD0en686710vkPzIYCgxT0+MMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhj7qtjs9od1vVwu63p9eDnuVvPC95j+WfNjXbWncxfOZurebDYLu/h8urRZ8vy638m2rtbbJkzT3nWn3Xv761Z6K4yba7ZYr3yP1Kigbrso+oR9X4+N8nzhe7AGHat4TPdVKk+4q7pU2ydQWCziSJ8nUPhyzifMnzxhkHQTfcKE8+uUC1Cg8NhMuwLFCffn1AAoSHiMp5+hooSbxmgG5QjnF5NrUJIwM5xBMcK6NAUKEW6m3+hlCYut6UUoRXgIzadQhLC4Gi8zQoT1zGIKRQgvNkAJwr3FMiNDaLOQihBuDJ+45Qhrm4VUgrD49dOFK8uTVMELD+UUofq7CF2Y6J+kKspV02bJ4s/2vgkjad/uVXpODhvfw52e7r1Cpafnue/BGrXXvAxVJnD67undDVW49D1Q4xZawnDte5zmab2Bgr8hPKrVEKqr71FaVJw0Fpru6HuYFhXncWG09T1Km4Ju/BwtD75HaVMw/pZNnQLfo7RpPn7DjzLfg7RKR/jse5BW6QhffA/SKg1hKnNX10fjQlXK/JfiIw1hKHoppZBCAVFIIX4UUogfhRTiRyGF+FFIIX4UyhAWwXA7DeHmwfG3fPNuVV083Iiv78HRtxqA16lZ9M0+H/X56fJow0f33wM3AJNo/imFDv8K8Dm3U2GK8POpUyHEJga3wlffvCe3QqUQdjE4nUOI5wGnc3j2retzKUxb37o+l8Io8a3rc3qWQuxZdChUJcLNwukcdjvfuj6Xc9hA7Bx2KUR47nYqBNm26FAI8r2MSyHEUupQqEqIpdSlMIZYSl0KQTbXuhOmLcTNwqEwqnzb3nInzCGeu53OIcj2YWdCVQK87+5zJ4wxFhqHwotv2nvOhBDvu/ucCSHed/dt82g4HchQee2b9t66SgarxoHh8OEYz92PCzR+AwZZMA37Gb/jP4pCCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGjkEL8KKQQPwopxI9CCvGj8D8IfwOCckshUvHQjAAAAABJRU5ErkJggg==" alt="Facebook" style={{ width: '50px', height: '50px' }}/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=826&t=st=1695967301~exp=1695967901~hmac=b35cbd7f269fc37b760ec674c944ad5eedbf56c8c496a40c01366dcc2996c679" alt="Instagram" style={{ width: '50px', height: '50px' }}/>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-center-content">
        <p>Dev@Deakin</p>
        <div className="horizontal-line">
          <a href="#">Privacy Policy</a>
          <a href="#">Code of Conduct</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;