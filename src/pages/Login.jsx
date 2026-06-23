import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response =
                await loginUser(formData);

            const { token, user } =
                response.data;

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            setUser(user);

            alert("Login Successful");

            navigate("/dashboard");
        } catch (error) {
            alert(
                error.response?.data
                    ?.message ||
                "Login Failed"
            );
        }
    };

    return (
        <div className="auth-container">
            <h1 className="title">
                Login
            </h1>

            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={
                        formData.email
                    }
                    onChange={
                        handleChange
                    }
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={
                        formData.password
                    }
                    onChange={
                        handleChange
                    }
                    required
                />

                <button
                    className="primary-btn"
                    type="submit"
                    style={{
                        width: "100%",
                    }}
                >
                    Login
                </button>
            </form>

            <Link
                className="auth-link"
                to="/register"
            >
                Don't have an account?
                Create Account
            </Link>
        </div>
    );
}

export default Login;