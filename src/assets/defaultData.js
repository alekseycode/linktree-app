import uuid from "react-uuid";

const DEFAULT_DESIGN = {
  id: uuid(),
  userId: undefined,
  name: "Personal Links",
  title: "brighton_erly",
  desc: "by New User",
  bio: "I hate mornings.",
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
    {
      id: uuid(),
      name: "Google",
      url: "https://www.google.com/",
      icon: "I_GG",
      active: false,
    },
  ],
};

export default DEFAULT_DESIGN;
