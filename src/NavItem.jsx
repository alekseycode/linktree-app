import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <Box
      _hover={{
        color: "rgb(111, 111, 182)",
        transition: "color 0.2s ease-out",
      }}
      pr="30px"
    >
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={to}>
        {label}
      </NavLink>
    </Box>
  );
};

export default NavItem;
