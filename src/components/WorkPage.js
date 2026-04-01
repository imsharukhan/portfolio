import React, { useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";
import styled from "styled-components";

import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import Card from "../subComponents/Card";
import { ReactIcon } from "../components/AllSvgs";
import { device } from "../config/breakpoints";
import { Work } from "../data/WorkData";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
    background-color: ${(props) => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    overflow: hidden; /* Lock the screen */
    touch-action: none; /* Crucial for mobile: prevents default browser bounce */
`;

const Main = styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    display: flex;
    color: white;

    @media only screen and (${device.md}) {
        left: calc(2rem + 2vw);
        top: 25%; /* Adjusted for better mobile centering */
    }
`;

const Rotate = styled.span`
    display: block;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1;
`;

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

const WorkPage = () => {
    const ref = useRef(null);
    const reactIcon = useRef(null);

    useEffect(() => {
        let element = ref.current;
        let scrollAmount = 0;
        let touchStart = 0;

        const updatePosition = (delta) => {
            scrollAmount += delta;
            const maxScroll = element.scrollWidth - window.innerWidth + 500;
            
            if (scrollAmount < 0) scrollAmount = 0;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;

            element.style.transform = `translateX(${-scrollAmount}px)`;
            
            if (reactIcon.current) {
                reactIcon.current.style.transform = `rotate(${-scrollAmount}deg)`;
            }
        };

        const handleWheel = (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                updatePosition(e.deltaX);
            }
            e.preventDefault();
        };

        // MOBILE TOUCH LOGIC
        const handleTouchStart = (e) => {
            touchStart = e.touches[0].clientX;
        };

        const handleTouchMove = (e) => {
            let touchEnd = e.touches[0].clientX;
            let touchDelta = touchStart - touchEnd;
            
            updatePosition(touchDelta * 1.2); // 1.2 is sensitivity
            touchStart = touchEnd;
            
            e.preventDefault();
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <PowerButton />
                <SocialIcons theme="dark" />

                <Main ref={ref} variants={container} initial="hidden" animate="show">
                    {Work.map((d) => (
                        <Card key={d.id} data={d} />
                    ))}
                </Main>

                <Rotate ref={reactIcon}>
                    <ReactIcon width={80} height={80} fill={darkTheme.text} />
                </Rotate>

                <BigTitle text="WORK" top="10%" right="20%" />
            </Box>
        </ThemeProvider>
    );
};

export default WorkPage;