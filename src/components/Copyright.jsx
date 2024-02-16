import { Typography } from "@mui/material";
import Link from "next/link";

export default function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://cris3h.github.io/portfolio-cv/portfolio/" target='_blank' rel='noopener noreferrer'>
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }