// 1. Import your certificates from the assets folder
import webdevcert from "../assets/Images/webdevcert.png";
import restapicert from "../assets/Images/restapicert.png";
import aicert from "../assets/Images/aicert.png"; // check if this is .jpg or .png in your folder
import claudecert from "../assets/Images/claudecert.png";
import scalarcert from "../assets/Images/scalarcert.png";
import googlecloud from "../assets/Images/googlecloud.png";

export const Blogs = [
    {
        id: 1,
        name: "Software Development Intern @ EY (GDS)",
        tags: ["mern-stack", "enterprise", "web-apps"],
        date: "Feb - Mar 2025",
        imgSrc: webdevcert,
        link: "https://www.linkedin.com/in/srk18/"
    },
    {
        id: 2,
        name: "AI: Transformative Learning (Microsoft & SAP)",
        tags: ["ai-engineer", "machine-learning", "innovation"],
        date: "Jan - Mar 2025",
        imgSrc: aicert,
        link: "https://www.linkedin.com/in/srk18/"
    },
    {
        id: 3,
        name: "Rest API (Intermediate) - HackerRank Certified",
        tags: ["backend", "api-design", "logic"],
        date: "14 March, 2026",
        imgSrc: restapicert,
        link: "https://www.linkedin.com/in/srk18/"
    },
    {
        id: 4,
        name: "Claude Code in Action - Anthropic Certified",
        tags: ["ai-tools", "llm-coding", "anthropic"],
        date: "Feb 2026",
        imgSrc: claudecert,
        link: "https://www.linkedin.com/in/srk18/"
    },
    {
        id: 5,
        name: "Google Cloud Arcade Program - Cloud Hero",
        tags: ["gcp", "infrastructure", "kubernetes"],
        date: "2025",
        imgSrc: googlecloud,
        link: "https://www.linkedin.com/in/srk18/"
    },
    {
        id: 6,
        name: "Young Innovator Internship - Scaler School",
        tags: ["problem-solving", "innovation", "internship"],
        date: "May - Aug 2024",
        imgSrc: scalarcert,
        link: "https://www.linkedin.com/in/srk18/"
    }
]