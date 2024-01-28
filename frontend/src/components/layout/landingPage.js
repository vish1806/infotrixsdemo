import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { AppLayout } from "./app-layout";
import { LoginDialog } from "../login/login-dialog";
import { useUser } from "../../context/user-context";

const LandingPage = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const navigate=useNavigate();
  const { user, loginUser, logoutUser, isAdmin } = useUser();
  console.log(openLoginDialog);
  const handleLoginSubmit = async(username, password) => {
    const a= await loginUser(username, password);
    console.log(a);
    if(user)
    {
      navigate("/books");
    } 
    setOpenLoginDialog(false);
  };
  const handleLoginClose = () => {
    setOpenLoginDialog(false);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        textAlign: "center",
        mt: 23,
        background: "rgb(131,58,180)",
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        color: "#fff", // Set text color to white or a suitable contrast
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Step into the Library Management System, where knowledge meets
        convenience!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Manage your library seamlessly with our advanced system.
      </Typography>
      <Typography variant="body5" sx={{ mb: 4 }}>
        User: guest, guest
      </Typography>
      <Typography variant="body2" sx={{ mb: 4 }}>
        Admin: Admin, Admin
      </Typography>
      {/* <Button
        onClick={() => {
          setOpenLoginDialog(true);
        }}
        component={Link}
        variant="contained"
        color="primary"
        size="large"
        sx={{ mx: 7 }}
      >
        Sign Up
      </Button> */}
      <Button
        onClick={() => {
          setOpenLoginDialog(true);
        }}
        component={Link}
        variant="contained"
        color="primary"
        size="large"
        sx={{ mx: 7 }}
      >
        Login
      </Button>
      <LoginDialog
        open={openLoginDialog}
        handleSubmit={handleLoginSubmit}
        handleClose={handleLoginClose}
      />
    </Container>
  );
};

export default LandingPage;