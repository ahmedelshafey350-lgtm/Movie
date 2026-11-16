import React, { useState, useEffect } from "react";
import "../../Login_Sign.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../FireBase/Firebase";
import { Link, useHistory } from "react-router-dom";

function Login_Sign() {
  const [info, setInfo] = useState({
    FristName: "",
    LastName: "",
    Email: "",
    password: "",
    istrue: false,
  });
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("Information", JSON.stringify(info));
  }, [info]);

  const updateField = (field, value) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxToggle = () => {
    setInfo((prev) => ({ ...prev, istrue: !prev.istrue }));
  };

  const isFormValid =
    info.istrue &&
    info.FristName.trim() !== "" &&
    info.LastName.trim() !== "" &&
    info.Email.trim() !== "" &&
    info.password.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      history.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-primary p-3 p-md-4 p-xl-5" style={{ height: "150vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h2 className="h3">Registration</h2>
                      <h3 className="fs-6 fw-normal text-secondary m-0">
                        Enter your details to register
                      </h3>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          required
                          value={info.FristName}
                          onChange={(e) => updateField("FristName", e.target.value)}
                        />
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          required
                          value={info.LastName}
                          onChange={(e) => updateField("LastName", e.target.value)}
                        />
                        <label htmlFor="lastName" className="form-label">
                          Last Name
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                          value={info.Email}
                          onChange={(e) => updateField("Email", e.target.value)}
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          value={info.password}
                          placeholder="Password"
                          required
                          onChange={(e) => updateField("password", e.target.value)}
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={info.istrue}
                          name="iAgree"
                          id="iAgree"
                          required
                          onChange={handleCheckboxToggle}
                        />
                        <label className="form-check-label text-secondary" htmlFor="iAgree">
                          I agree to the{" "}
                          <span className="link-primary text-decoration-none">
                            terms and conditions
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-2xl btn-primary"
                          type="submit"
                          id="1btn"
                          disabled={!isFormValid}
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="row1">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">
                      Already have an account?{" "}
                      <Link to="/Signin" className="link-primary text-decoration-none">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="row2">
                  <div className="col-12">
                    <p className="mt-5 mb-4">Or continue with</p>
                    <div className="d-flex gap-3 flex-column" style={{ cursor: "pointer" }}>
                      <button type="button" className="btn bsb-btn-xl btn-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <span className="ms-2 fs-6 text-uppercase">Sign in With Facebook</span>
                      </button>

                      <button
                        type="button"
                        className="btn bsb-btn-xl btn-primary"
                        onClick={handleGoogleLogin}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-google"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        <span className="ms-2 fs-6 text-uppercase">Sign in With Google</span>
                      </button>

                      <button type="button" className="btn bsb-btn-xl btn-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <span className="ms-2 fs-6 text-uppercase">Sign in With Twitter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login_Sign;
