import React from "react";
import MyNavButton from "../MyNavButton";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 p-4">
      <div className="flex flex-col gap-4">
        <h3>Nique Logo</h3>
        <div className="flex flex-col gap-1">
          <p>
            By{" "}
            <a href="" className="text-[var(--primary)]">
              wintercode design.
            </a>
          </p>
          <p>
            Powered by{" "}
            <a href="" className="text-[var(--primary)]">
              wintercode design.
            </a>
          </p>
        </div>
      </div>
      <div>
        <h6>Pages</h6>
        <ul>
          {[
            "Menu",
            "Restaurant",
            "Classes",
            "Book a Table",
            "Contact",
            "Blog",
            "Shop",
          ].map((link, index) => (
            <li key={index}>
              <MyNavButton title={link} key={index} footer={true} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h6>Utility Pages</h6>
        <ul>
          {[
            "Styleguide",
            "Licensing",
            "Changelog",
            "404 Page",
            "Password",
            "Protected",
          ].map((link, index) => (
            <li>
              <MyNavButton title={link} key={index} footer={true} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
