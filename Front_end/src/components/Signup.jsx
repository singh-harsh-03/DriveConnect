import { useState } from "react";

const Signup = () => {
  const [role, setRole] = useState("owner");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h2>
        <form className="space-y-3">
          <input className="border p-2 w-full" type="text" placeholder="Full Name" />
          <input className="border p-2 w-full" type="email" placeholder="Email" />
          <input className="border p-2 w-full" type="password" placeholder="Password" />

          {/* Dropdown for Role Selection */}
          <select
            className="border p-2 w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="owner">Car Owner</option>
            <option value="driver">Driver</option>
          </select>

          {/* Show DL Upload if user selects Driver */}
          {role === "driver" && (
            <div>
            <label className="block text-gray-700 mb-1">Upload your Driver's License</label>
            <input
              className="border p-2 w-full"
              type="file"
              accept="image/*"
            />
          </div>
          )}

          <button className="bg-blue-500 text-white px-6 py-2 rounded shadow-md w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
