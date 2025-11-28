import { useNavigate } from "react-router";

export default function Login({ onLogin }) {
  const redirect = useNavigate();
  function handleLoginSubmit(data) {
    const email = data.get("email");
    const password = data.get("password");

    onLogin({ email, password });
    redirect("/");
  }

  return (
    <>
      <section id="login-page">
        <form id="login" action={handleLoginSubmit}>
          <div className="container">
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <label htmlFor="login-pass">Password</label>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Password"
            />
            <input type="submit" className="btn submit" defaultValue="Login" />
          </div>
        </form>
      </section>
    </>
  );
}
