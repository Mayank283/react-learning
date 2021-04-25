import React, { useState } from "react";
import ToolbarComponent from "./toolbar/Toolbar";
import DrawerComponent from "./drawer/Drawer";

const Header = () => {

  const [left, setLeft] = useState(false);

  const toggleDrawer = () => {
    setLeft(false);
  };

  const openDrawer = () => {
    setLeft(true);
  };

  return (
    <div>
      <ToolbarComponent openDrawerHandler={openDrawer} />
      <DrawerComponent
        left={left}
        toggleDrawerHandler={toggleDrawer}
      />
    </div>
  );
}

export default Header;