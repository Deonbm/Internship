import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, CardContent, CardHeader } from "@mui/material";
import { registerAPI, loginAPI } from "../services/allapi";
import {useNavigate} from "react-router-dom";


function Auth({ Registrationn }) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({}); // store validation errors
  const navigate = useNavigate();

  // 🔹 Validation function (shared for register & login)
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (Registrationn && !values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  // 🔹 Registration function
  const registration = async () => {
    const validationErrors = validate(user);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const out = await registerAPI(user);
      if (out.status === 201) {
        alert("Registration Successful");
        setUser({ username: "", email: "", password: "" });
        setErrors({});
      } else if (out.response?.status === 406) {
        alert(out.response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Login function
  const login = async () => {
    const validationErrors = validate(user);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const out = await loginAPI(user);
      if (out.status === 200) {
        alert("Login Successful");
        // ✅ Save user + token in sessionStorage
        sessionStorage.setItem("user", JSON.stringify(out.data.user));
        sessionStorage.setItem("token", out.data.token);

        console.log("User saved to sessionStorage:", out.data.user);
        console.log("Token saved to sessionStorage:", out.data.token);

        setUser({ username: "", email: "", password: "" });
        setErrors({});
        navigate('/')
      } else if (out.status === 404) {
        setErrors({ api: "Invalid email/password" });
      }
    } catch (error) {
      console.log(error);
      setErrors({ api: "Something went wrong, please try again!" });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <Card className="w-[400px] shadow-xl rounded-2xl">
        {Registrationn ? (
          <CardHeader
            title="Sign Up"
            className="text-center text-xl font-semibold"
          />
        ) : (
          <CardHeader
            title="Sign In"
            className="text-center text-xl font-semibold"
          />
        )}
        <CardContent>
          <div className="flex flex-col gap-4">
            {Registrationn && (
              <TextField
                label="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
                error={!!errors.username}
                helperText={errors.username}
              />
            )}
            <TextField
              label="Email"
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              error={!!errors.password}
              helperText={errors.password}
            />
            {errors.api && (
              <p className="text-red-500 text-sm text-center">{errors.api}</p>
            )}
            {Registrationn ? (
              <Button
                variant="contained"
                color="primary"
                className="w-full py-2 rounded-lg"
                onClick={registration}
              >
                Register
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="w-full py-2 rounded-lg"
                onClick={login}
              >
                Login
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Auth;
