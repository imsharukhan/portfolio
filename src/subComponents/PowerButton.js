import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../config/breakpoints";
import AppContext from "../state/AppContext";

const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background-color: #fcf6f4;
    padding: 0.3rem; 
    border-radius: 50%;
    border: 1.5px solid #000;
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #000;
        color: #fcf6f4;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    & > *:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;
    }

    @media only screen and (${device.md}) {
        top: 1rem;
        width: 2.2rem;
        height: 2.2rem;
        border: 1px solid #000;
    }
`;

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                <AppContext.Consumer>
                    {(pageWidth) => {
                        // Responsive arrow sizing
                        let size = pageWidth <= 768 ? 20 : 28;
                        return (
                            <svg 
                                width={size} 
                                height={size} 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M19 12H5M5 12L11 18M5 12L11 6" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        );
                    }}
                </AppContext.Consumer>
            </NavLink>
        </Power>
    );
};

export default PowerButton;