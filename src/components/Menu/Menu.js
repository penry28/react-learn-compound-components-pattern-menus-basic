import { useCallback, useMemo, useState } from "react";
import { MenuContext } from "./context";

const Menu = ({ children, defaultSelected }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelected);

  const toggleSelectedItem = useCallback(
    (item) => {
      if (item !== selectedItem) {
        setSelectedItem(item);
      } else {
        setSelectedItem("");
      }
    },
    [selectedItem]
  );

  const value = useMemo(
    () => ({
      toggleSelectedItem,
      selectedItem
    }),
    [selectedItem, toggleSelectedItem]
  );

  return (
    <MenuContext.Provider value={value}>
      <menu>{children}</menu>
    </MenuContext.Provider>
  );
}

export default Menu;
