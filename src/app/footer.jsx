"use client"
import './globals.css';

function Footer() {
  return (
      <div className="container">
      <h3>I would love to hear from you!</h3>
        <div className="footer-content">
          <div className="footer-item">
            <a href='mailto:kiley.pratt@yale.edu'>
            <button>
              <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt="Email Icon" className="footer-icon" />
              kiley.pratt@yale.edu
            </button>
            </a>
          </div>
          <div className="footer-item">
            <a href='tel:+18028258972'>
              <button>
                <img src="https://cdn-icons-png.flaticon.com/128/455/455705.png" alt="Phone Icon" className="footer-icon" />
                (802) 825 - 8972
              </button>
            </a>
          </div>
          <div className="footer-item">
            <a href='https://www.linkedin.com/in/kiley-pratt/' target='_blank'>
              <button>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn Icon" className="footer-icon" />
                @Kiley-Pratt
              </button>
            </a>
          </div>
          <div className="footer-item">
            <a href='https://github.com/kpratt02' target='_blank'>
              <button>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub Icon" className="footer-icon" />
                @kpratt02
              </button>
            </a>
          </div>
        </div>
      </div>
  );
}

export default Footer;