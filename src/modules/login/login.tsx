import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { ROUTES } from "../../constants";
import { iCreds } from "../../types";
import "./login.scss";
import { login } from "../../apis";

function Login(): JSX.Element {
  const [creds, setCreds] = useState<iCreds>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setError("");
      let temp = { ...creds };
      temp[name as keyof typeof creds] = value;
      setCreds(temp);
    },
    [creds]
  );

  const onClickHandler = useCallback(async () => {
    const { email, password } = creds;
    if (!email || !password) {
      alert("Please enter email and password both");
      return;
    }
    const response = await login(creds);
    if (response) {
      navigate(ROUTES.dashboard);
      return;
    }
    setError("Username or password is wrong");
  }, [creds]);

  return (
    <main className="loginComponentWrapper">
      <section className="loginWrapper">
        <p>{error}</p>
        <Input
          className="loginInput"
          name="email"
          placeholder="Email"
          value={creds.email}
          onChange={onChangeHandler}
        />
        <Input
          className="loginInput"
          name="password"
          placeholder="Password"
          value={creds.password}
          onChange={onChangeHandler}
        />
        <Button className="loginBtn" btnName="Login" onClick={onClickHandler} />
      </section>
    </main>
  );
}

export default Login;
