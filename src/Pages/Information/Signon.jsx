import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Signin() {
    const [Info, SetInfo] = useState({
        Email: "",
        password: "",
        istrue: false,
    });
    const [num, setNumber] = useState(0);
    const history = useHistory();

    useEffect(() => {
        // getValue();
        localStorage.setItem("Information", JSON.stringify(Info));
    }, [Info]);

    function getValue(value) {
        SetInfo((prev) => ({
            ...Info,
            password: value
        }))
    }
    function GetEmail(value) {
        SetInfo((prev) => ({
            ...prev,
            Email: value,
        }));
    }
    function GetValid() {
        if (num === 0) {
            SetInfo((prev) => ({
                ...prev,
                istrue: true,
            }));
            setNumber((prev) => Math.max(prev + 1, 1));
        } else {
            SetInfo((prev) => ({
                ...prev,
                istrue: false,
            }));
            setNumber((prev) => Math.max(prev - 1, 0));
        }
    }
    const getHome = (e) => {
        history.push("/")
    };
    return (
        <section class="bg-primary p-3 p-md-4 p-xl-5" style={{ height: "150vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-3 p-md-4 p-xl-5">

                                <div className="row">
                                    <div class="col-12">
                                        <div class="mb-5">
                                            <h2 class="h3">Sign In</h2>
                                            <h3 class="fs-6 fw-normal text-secondary m-0">
                                                Enter your details to register
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <form action="#!">
                                    <div class="row gy-3 overflow-hidden">
                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    onChange={(e) => { GetEmail(e.target.value) }}
                                                />
                                                <label for="email" class="form-label">
                                                    Email
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    name="password"
                                                    id="password"
                                                    value={Info.password}
                                                    placeholder="Password"
                                                    required
                                                    onChange={(e) => {
                                                        getValue(e.target.value);
                                                    }}
                                                />
                                                <label for="password" class="form-label">
                                                    Password
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    name="iAgree"
                                                    id="iAgree"
                                                    required
                                                    onClick={GetValid}
                                                />
                                                <label
                                                    class="form-check-label text-secondary"
                                                    for="iAgree"
                                                >
                                                    I agree to the{" "}
                                                    <span class="link-primary text-decoration-none">
                                                        terms and conditions
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="d-grid">
                                                <button
                                                    class="btn bsb-btn-2xl btn-primary"
                                                    type="submit"
                                                    onClick={
                                                        Info.istrue &&
                                                            Info.Email !== "" &&
                                                            Info.password !== ""
                                                            ? getHome
                                                            : console.log("null")
                                                    }
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row5" style={{ top: "80% !important", position: "absolute", width: "100%", left: "0 %" }}>
                                        <div class="col-12">
                                            <p class="m-0 text-secondary text-center">
                                                Already have an account?{" "}
                                                <Link to="/Login_Sign" className="link-primary text-decoration-none">
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signin;
