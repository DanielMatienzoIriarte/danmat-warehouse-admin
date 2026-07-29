import React, { useState, useEffect, useRef, useCallback } from "react";
import { UseAuth } from "../../../context/AuthContext";

const HeaderDropdown = ({ user_email }: { user_email: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { logout } = UseAuth();
console.log('email3', user_email);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  }, []);

  const handleLogout = useCallback(async(e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoggingOut) {
      return;
    }

    try {
      setIsLoggingOut(true);
      setIsOpen(false);

      await logout();
    } catch (err) {
      setIsLoggingOut(false);
    }
  }, [logout, isLoggingOut]);

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
          <span className="name">{`${user_email}`}</span>
          <span className="role">{`${user_email}`}</span>
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
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={isLoggingOut}
              style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', padding: 0 }}
            >
              <i className="fa fa-power-off"></i>
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderDropdown;