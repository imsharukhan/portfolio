import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { device } from "../config/breakpoints";

const ProjectCard = styled(motion.li)`
    width: 20rem; /* Increased back to a healthy size */
    height: 25rem;
    margin-right: 8rem;
    perspective: 1200px; 
    list-style: none;
    cursor: pointer;

    @media only screen and (${device.md}) {
        width: 16rem;
        height: 20rem;
        margin-right: 4rem;
    }
`;

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    transform-style: preserve-3d;
    
    ${ProjectCard}:hover & {
        transform: rotateY(180deg);
    }
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 0 50px 0 50px;
    box-sizing: border-box; 
`;

const Front = styled(CardFace)`
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.text};
    justify-content: center; 
    align-items: center;
`;

const Back = styled(CardFace)`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transform: rotateY(180deg);
    border: 2px solid ${(props) => props.theme.text};
    justify-content: space-between; 
`;

const BackHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.text};
    padding-bottom: 0.5rem;
`;

const Title = styled.h2`
    font-size: calc(1.2em + 0.5vw);
    text-align: center;
`;

const ShortDesc = styled.p`
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    margin-top: 1rem;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1rem;
`;

const Tag = styled.span`
    font-size: 0.8rem;
    opacity: 0.8;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Link = styled(NavLink)`
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    text-decoration: none;
    padding: 0.6rem 2rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover{
        opacity: 0.8;
    }
`;

const Item = {
    hidden: { opacity: 0, scale: 0 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

const Card = (props) => {
    const { id, name, description, tags, demo, github } = props.data;

    return (
        <ProjectCard key={id} variants={Item}>
            <CardInner>
                <Front>
                    <Title>{name}</Title>
                    <ShortDesc>{description}</ShortDesc>
                </Front>

                <Back>
                    <BackHeader>
                        <span style={{fontSize: '0.8rem', opacity: 0.7}}>TECH STACK</span>
                        <NavLink to={{ pathname: `${github}` }} target="_blank" style={{color:'inherit'}}>
                            <Github width={25} height={25} />
                        </NavLink>
                    </BackHeader>
                    
                    <Tags>
                        {tags.map((t, index) => <Tag key={index}>#{t}</Tag>)}
                    </Tags>
                    
                    <Footer>
                        <Link to={{ pathname: `${demo}` }} target="_blank">Visit</Link>
                    </Footer>
                </Back>
            </CardInner>
        </ProjectCard>
    );
};

export default Card;