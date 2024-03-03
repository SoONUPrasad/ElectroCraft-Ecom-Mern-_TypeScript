import { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const user = { _id: "123", role: "admin" };

const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link>
      <Link to={"/search"} onClick={() => setIsOpen(false)}>
        <FaSearch />
      </Link>
      <Link to={"/cart"} onClick={() => setIsOpen(false)}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((perv) => !perv)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && <Link to={"/admin/dashboard"}>Admin</Link>}
              <Link to={"/orders"}>Orders</Link>
              <button>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
