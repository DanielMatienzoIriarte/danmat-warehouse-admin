import DropDownMenu from './DropDownMenu';

interface UserMenuProps {
  user_email: string;
}

const UserMenu = ({ user_email }: UserMenuProps) => {
  return (
    <div id="userbox" className="userbox">
      <a href="#" data-toggle="dropdown">
        <figure className="profile-picture">
          <img
            src="assets/images/!logged-user.jpg"
            alt="Joseph Doe"
            className="img-circle"
            data-lock-picture="assets/images/!logged-user.jpg"
          />
        </figure>

        <div className="profile-info" data-lock-name="John Doe" data-lock-email={`${user_email}`}>
          <span className="name">{user_email}</span>
          <span className="role">administrator</span>
        </div>

        <i className="fa custom-caret"></i>
      </a>

      <DropDownMenu />
    </div>
  );
};

export default UserMenu;