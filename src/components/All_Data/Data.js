
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import Image1 from "../../assets/project-1.png"
import Image2 from "../../assets/project-2.png"
import Image3 from "../../assets/project-3.png"
import Image4 from "../../assets/project-4.png"

export const NavbarData = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Contact",
        link: "/contact",
    },
    {
        id: 3,
        title: "Project",
        link: "/project",
    },
    {
        id: 4,
        title: "Service",
        link: "/service",
    },
]

export const ServiceData = [
    {
        id: 1,
        icon: <FaReact className="text-[#0FBACF]" />,
        title: "React JS Developer",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem aperiam earum sunt, aliquam odio hic? Reiciendis, qui? Rem, voluptatibus ipsam?",
        link: "/service",
    },
    {
        id: 2,
        icon: <SiNextdotjs className="text-red-500" />,
        title: "Next Js Developer",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem aperiam earum sunt, aliquam odio hic? Reiciendis, qui? Rem, voluptatibus ipsam?",
        link: "/service",
    },
    {
        id: 3,
        icon: <FaNodeJs className="text-[#558B2F]" />,
        title: "Node JS Developer",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem aperiam earum sunt, aliquam odio hic? Reiciendis, qui? Rem, voluptatibus ipsam?",
        link: "/service",
    },  
]


export const ProjectData = [
    {
        id: 1,
        img: Image1,
        title: "project 1",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.",
        link: "/project",
    },
    {
        id: 2,
        img: Image2,
        title: "project 2",        
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.",
        link: "/project",
    },
    {
        id: 3,
        img: Image4,
        title: "project 3",       
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.",
        link: "/project",
    },  
    {
        id: 4,
        img: Image3,
        title: "project 3",       
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.",
        link: "/project",
    },  
]