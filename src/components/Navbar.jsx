import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white w-full fixed top-0 shadow-md">
      <h1 className="text-2xl font-bold">DriveReach</h1>
      <div className="flex gap-4">
        <Link className="hover:underline" to="/owner">Owner</Link>
        <Link className="hover:underline" to="/driver">Driver</Link>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">X</button>
      </div>
    </nav>
  );
};

export default Navbar;
