"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
// import { API } from "@/src/lib/api";
import { useAuth } from "../context/AuthContext";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [remember, setRemember] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  // const [ isLogin, setIsLogin ] = useAuth()
  const { isLoggedIn, user, login } = useAuth();

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const fetchData = await res.json();
      console.log("Login response:", fetchData);

      if (res) {
        const decodedToken = JSON.parse(atob(fetchData.accessToken.split('.')[1]))
        const user = {
          name: decodedToken.name,
          email: decodedToken.email,
        }
  
        setIsLogin(user, fetchData.accessToken, fetchData.refreshToken)
        toast.success("Đăng nhập thành công")
        router.push('/')
      } else {
        alert(fetchData.message || 'Đăng nhập thất bại')
      }
    }
    catch (error) {
      console.error("❌ Error during login:", error);
    }



  }

  return (
    <Container maxWidth="xs" sx={{ mt: 8, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
          <Typography variant="h5" align="center" fontWeight={600}>
            Sign in
          </Typography>

          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              value={email}
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              placeholder="nguyenvana@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                value={password}
                fullWidth
                label="Password"
                type={seePassword ? "text" : "password"}
                variant="outlined"
                margin="normal"
                placeholder=" "
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                sx={{ position: "absolute", top: 25, right: 0, color: "grey" }}
                type="button"
                onClick={() => setSeePassword(!seePassword)}
              >
                {seePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                // checked={remember}
                // onChange={(e) => setRemember(e.target.checked)}
                />
              }
              label="Remember me"
              sx={{ mt: 1 }}
            />

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleLogin}
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.2,
                  background: "#c62828",
                  ":hover": { background: "#b71c1c" },
                }}
              >
                Đăng Nhập
              </Button>
            </motion.div>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "primary.main", cursor: "pointer" }}
            >
              Forgot your password?
            </Typography>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ mb: 2, textTransform: "none" }}
            >
              Sign in with Google
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Do not have an account?{" "}
              <Box
                component="span"
                sx={{ color: "primary.main", cursor: "pointer" }}
                onClick={()=>router.push('/register')}
              >
                Sign up
              </Box>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}
