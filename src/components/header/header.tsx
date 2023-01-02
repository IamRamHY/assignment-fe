import { useCallback } from "react";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { logout } from "../../apis";
import "./header.scss";
import { appStorage } from "../../helpers";

function Header(): JSX.Element {
  const navigate = useNavigate();

  const logoutHandler = useCallback(async () => {
    const response = await logout();
    if (response) {
      navigate(ROUTES.login);
      appStorage.clear();
    }
  }, []);

  return (
    <header className="header">
      <section className="leftSection">
        <div className="logo"></div>
      </section>
      <section className="rightSection">
        <Button btnName="Logout" onClick={logoutHandler} />
      </section>
    </header>
  );
}

export default Header;
