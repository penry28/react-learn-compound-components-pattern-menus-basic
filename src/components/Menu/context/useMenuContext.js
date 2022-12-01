import { useContext } from "react";
import MenuContext from "./MenuContext";

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      "Menu item component cannot be used outside the Menu component."
    );
  }

  return context;
}

export default useMenuContext;
