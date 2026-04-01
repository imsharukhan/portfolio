import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";
import { device } from "../config/breakpoints";

// Import your custom images
import ResumeFile from "../assets/Images/Sharukhan_BE_Resume.pdf";
import LinkedInImg from "../assets/Images/linkedin-icon.png"; 
import DiscordImg from "../assets/Images/discord-icon.webp";
import ResumeImg from "../assets/Images/resume-icon.png";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    & > *:not(:last-child) {
        margin: 0.5rem 0;
    }

    @media only screen and (${device.md}) {
        left: 1rem;
    }
`;

// This ensures your images match the GitHub SVG size perfectly
const ImgIcon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
    /* This filter makes black icons turn white if the theme is dark */
    filter: ${props => props.theme === "dark" ? "invert(1)" : "invert(0)"};
`;

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${(props) =>
        props.color === "dark" ? darkTheme.text : darkTheme.body};

    @media only screen and (${device.md}) {
        height: 5rem;
    }
`;

const SocialIcons = (props) => {
    const iconColor = props.theme === "dark" ? darkTheme.text : darkTheme.body;

    return (
        <Icons>
            {/* 1. GITHUB (SVG) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1 }}
                whileHover={{ scale: 1.2 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" to={{ pathname: "https://github.com/imsharukhan" }}>
                    <Github width={25} height={25} fill={iconColor} />
                </NavLink>
            </motion.div>

            {/* 2. LINKEDIN (IMAGE) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
                whileHover={{ scale: 1.2 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" to={{ pathname: "https://linkedin.com/in/srk18" }}>
                    <ImgIcon src={LinkedInImg} alt="LinkedIn" theme={props.theme} />
                </NavLink>
            </motion.div>

            {/* 3. DISCORD (IMAGE) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}
                whileHover={{ scale: 1.2 }}
            >
                <NavLink style={{ color: "inherit" }} target="_blank" to={{ pathname: "https://discordapp.com/users/iamsharukhan" }}>
                    <ImgIcon src={DiscordImg} alt="Discord" theme={props.theme} />
                </NavLink>
            </motion.div>

            {/* 4. RESUME (IMAGE) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}
                whileHover={{ scale: 1.2 }}
            >
                <a style={{ color: "inherit" }} href={ResumeFile} download="Sharukhan_Resume.pdf">
                    <ImgIcon src={ResumeImg} alt="Download Resume" theme={props.theme} />
                </a>
            </motion.div>

            <Line
                color={props.theme}
                initial={{ height: 0 }}
                animate={{ height: "8rem" }}
                transition={{ type: "spring", duration: 1, delay: 0.8 }}
            />
        </Icons>
    );
};

export default SocialIcons;