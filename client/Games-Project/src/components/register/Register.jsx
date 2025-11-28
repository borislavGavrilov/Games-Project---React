import { useNavigate } from "react-router";

export default function Register({ onRegister }) {
  const reDirect = useNavigate();
  function handleRegisterSubmit(data) {
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");

    onRegister({ email, password });
    reDirect("/login");
  }
  return (
    <>
      <section id="register-page" className="content auth">
        <form id="register" action={handleRegisterSubmit}>
          <div className="container">
            <div className="brand-logo" />
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
            />
            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Repeat Password"
            />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Register"
            />
          </div>
        </form>
      </section>
    </>
  );
}
