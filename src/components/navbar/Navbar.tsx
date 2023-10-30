import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/public/search.svg" alt="" className="icon" />
        <img src="/public/all-application.svg" alt="" className="icon" />
        <img src="/public/expand-text-input.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/public/remind.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="/public/photo_profile_o1xm.png"
            alt=""
          />
          <span>Reza</span>
        </div>
        <img src="/public/setting-two.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;