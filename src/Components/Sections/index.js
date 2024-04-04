import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Home from "../Home";
import About from "../About";
import Work from "../Work";
import Testimonial from "../Testimonial";
import Contact from "../Contact";

export const sections = [
  {
    text: "Home",
    icon: <HomeIcon />,
    id: "section1",
    component: <Home />,
  },
  {
    text: "About",
    icon: <InfoIcon />,
    id: "section2",
    component: <About />,
  },
  {
    text: "Work",
    icon: <CommentRoundedIcon />,
    id: "section3",
    component: <Work />,
  },
  {
    text: "Testimonials",
    icon: <CommentRoundedIcon />,
    id: "section4",
    component: <Testimonial />,
  },
  {
    text: "Contact",
    icon: <PhoneRoundedIcon />,
    id: "section5",
    component: <Contact />,
  },
];
