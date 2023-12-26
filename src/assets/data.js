import uuid from "react-uuid";

const GUEST_DESIGN = {
  id: uuid(),
  name: "Personal Links",
  title: "rob_banks",
  desc: "by Aleksey C",
  bio: "I don't rob banks.",
  imgURL: "https://bit.ly/dan-abramov",
  bgColor: "gray.800",
  font: "sans-serif",
  shape: "0px",
  variantColor: "",
  shadow: "",
  fontColor: "white",
  shadowColor: "black",
  isPublic: true,
  buttonFontColor: "white",
  showLogo: true,
  links: [
    {
      id: uuid(),
      name: "YouTube",
      url: "https://www.youtube.com/",
      icon: "I_YT",
      active: true,
    },
  ],
};

export default GUEST_DESIGN;
