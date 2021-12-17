import React from "react";

// footer
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-list-container">
            {/* list of links in footer */}
          <a href="/#anchor">Home</a>
          <a href="/about-me#">About Me</a>
          <a href="/projects#">Projects</a>
          <a href="/interests#">Interests</a>
          <a href="/work-history#">Work History</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
