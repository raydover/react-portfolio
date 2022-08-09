import BlastOff from "./assets/images/blastoff.png";
import EFit from "./assets/images/e-fit.png";

// Projects list
// eslint-disable-next-line import/no-anonymous-default-export
const projectsData = [
    {
        id: 1, 
        image: BlastOff,
        imageAlt: "BlastOff Image",
        title: "BlastOff",
        liveSite: "https://blastoff2.herokuapp.com/",
        gitHub: "https://github.com/JtheFox/blastoff"
    },
    {
        id: 2, 
        image: EFit,
        imageAlt: "EFit Image",
        title: "EFit",
        liveSite: "https://polar-shelf-24197.herokuapp.com/",
        gitHub: "https://github.com/VanessaLiaw021/E-Fit"
    },
];

//Export projects data
export default projectsData;