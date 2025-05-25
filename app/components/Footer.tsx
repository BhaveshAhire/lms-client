import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#111", color: "#fff", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Link href="#" color="inherit" display="block">
              Our Story
            </Link>
            <Link href="#" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block">
              FAQ
            </Link>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">
              Courses
            </Link>
            <Link href="#" color="inherit" display="block">
              My Account
            </Link>
            <Link href="#" color="inherit" display="block">
              Course Dashboard
            </Link>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Social Links
            </Typography>
            <Link href="#" color="inherit" display="block">
              YouTube
            </Link>
            <Link href="#" color="inherit" display="block">
              Instagram
            </Link>
            <Link href="#" color="inherit" display="block">
              GitHub
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2">Call Us: 1-885-666-2022</Typography>
            <Typography variant="body2">
              Address: +7011 Vermont Ave, Los Angeles, CA 90044
            </Typography>
            <Typography variant="body2">
              Mail Us: hello@elearning.com
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "20px", opacity: 0.7 }}
        >
          Copyright © {new Date().getFullYear()} ELearning | All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
