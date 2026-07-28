import { useState, useEffect, useRef } from "react";

interface UserMenuProps {
  user_email: string;
};

const HeaderDropdown = ({ user_email }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropDownRef} id="userbox" className={`userbox ${isOpen ? 'open' : ''}`}>
      <a data-toggle="dropdown" onClick={(e) => {e.preventDefault();setIsOpen(!isOpen)}}>
        <figure className="profile-picture">
          <img
            src="assets/images/!logged-user.jpg"
            alt="Joseph Doe"
            className="img-circle"
            data-lock-picture="assets/images/!logged-user.jpg"
          />
        </figure>

        <div className="profile-info" data-lock-name={`${user_email}`} data-lock-email={`${user_email}`}>
          <span className="name">{user_email}</span>
          <span className="role">administrator</span>
        </div>

        <i className="fa custom-caret"></i>
      </a>

      <div className="dropdown-menu" style={ {'border':'1px solid red'} }>
        <ul className="list-unstyled">
          <li className="divider"></li>
          <li>
            <a role="menuitem" href="pages-user-profile.html">
              <i className="fa fa-user"></i>
              My Profile
            </a>
          </li>
          <li>
            <a role="menuitem" href="#" data-lock-screen="true">
              <i className="fa fa-lock"></i>
              Lock Screen
            </a>
          </li>
          <li>
            <a role="menuitem" href="pages-signin.html">
              <i className="fa fa-power-off"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderDropdown;