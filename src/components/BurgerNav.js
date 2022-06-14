import { useState } from "react";
import Hamburger from "hamburger-react";
import NavList from "./NavList";

const BurgerNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger
        className="burger"
        size={70}
        toggled={isOpen}
        toggle={setOpen}
      />
      <NavList isOpen={isOpen} />
    </>
  );
};

export default BurgerNav;
