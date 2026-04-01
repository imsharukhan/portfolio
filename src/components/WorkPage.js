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
    overflow: hidden; 
    touch-action: none; 
`;

const Main = styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    display: flex;
    color: white;
    will-change: transform; /* Hardware Acceleration */

    @media only screen and (${device.md}) {
        left: calc(2rem + 2vw);
        top: 25%; 
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
        transition: { staggerChildren: 0.5, duration: 0.5 },
    },
};

const WorkPage = () => {
    const ref = useRef(null);
    const reactIcon = useRef(null);

    useEffect(() => {
        let element = ref.current;
        let scrollAmount = 0;
        let lerpAmount = 0;
        let touchStart = 0;
        let animationFrameId;

        const updatePosition = (delta) => {
            scrollAmount += delta;
            const maxScroll = element.scrollWidth - window.innerWidth + 500;
            if (scrollAmount < 0) scrollAmount = 0;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        };

        const render = () => {
            // Lerp loop for buttery smooth motion (10% ease)
            lerpAmount += (scrollAmount - lerpAmount) * 0.1;
            
            if (element) {
                element.style.transform = `translateX(${-lerpAmount}px)`;
            }
            if (reactIcon.current) {
                reactIcon.current.style.transform = `rotate(${-lerpAmount}deg)`;
            }
            animationFrameId = requestAnimationFrame(render);
        };

        const handleWheel = (e) => {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                updatePosition(e.deltaX);
            } else {
                updatePosition(e.deltaY); // Fallback for vertical mouse wheels
            }
            e.preventDefault();
        };

        const handleTouchStart = (e) => {
            touchStart = e.touches[0].clientX;
        };

        const handleTouchMove = (e) => {
            let touchEnd = e.touches[0].clientX;
            let touchDelta = touchStart - touchEnd;
            updatePosition(touchDelta * 1.5); // Sensitivity
            touchStart = touchEnd;
            e.preventDefault();
        };

        animationFrameId = requestAnimationFrame(render);

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            cancelAnimationFrame(animationFrameId);
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