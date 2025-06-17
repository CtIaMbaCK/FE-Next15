"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seePassword, setSeePassword] = useState(false);


    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            })

            const fetchData = await res.json();
            console.log("Register response:", fetchData);

            if (res.ok) {
                router.push('/login');
                toast.success("Đăng ký thành công");
            } else {
                toast.error(fetchData.message[0]);
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
                    Sign up
                </Typography>

                <Box component="form" sx={{ mt: 3 }}>
                    <TextField
                        value={name}
                        fullWidth
                        label="Name"
                        type="text"
                        variant="outlined"
                        margin="normal"
                        placeholder="Nguyễn Văn A"
                        onChange={(e) => setName(e.target.value)}
                    />
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

                    <Box sx={{ position: "relative" }}>
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

                    {/* <TextField
                            value={confirmPassword}
                            fullWidth
                            label="Confirm Password"
                            type={seePassword ? "text" : "password"}
                            variant="outlined"
                            margin="normal"
                            placeholder=" "
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        /> */}

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={handleRegister}
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
                            Đăng Ký
                        </Button>
                    </motion.div>

                    <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                        Already have an account?{" "}
                        <Box
                            component="span"
                            sx={{ color: "primary.main", cursor: "pointer" }}
                            onClick={() => router.push('/login')}
                        >
                            Sign in
                        </Box>
                    </Typography>
                </Box>
            </Paper>
        </motion.div>
    </Container>

);
}
