import useMenuContext from "./context/useMenuContext";
import './style.css';

const MenuItem = ({ value, children }) => {
  const { toggleSelectedItem, selectedItem } = useMenuContext();

  return (
    <button
      className={`${selectedItem === value ? 'active' : ''}`}
      onClick={() => toggleSelectedItem(value)}
    >
      {children}
    </button>
  );
}

export default MenuItem;
