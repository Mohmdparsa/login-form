import { useState } from "react";
const LoginForm = () => {
  const [value, setValue] = useState();
  const [form, setForm] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Form", form);
    setForm("");
    setValue("");
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full h-[23rem] text-center">
          <h1 className="text-2xl font-bold mb-4">LOGIN</h1>
          <div className="flex flex-col items-center justify-center">
            <form
              action=""
              onSubmit={handleClick}
              className="flex flex-col items-center justify-center"
            >
              <input
                type="text"
                placeholder="Username"
                className="border-green-500 border-2 placeholder-center rounded-3xl mt-10 w-[15rem] h-10"
                value={value}
                onChange={(e) => setForm(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border-blue-500 border-2 placeholder-center rounded-3xl mt-7 h-10"
                value={value}
                onChange={(e) => setForm(e.target.value)}
              />
              <button className="border-green-500 border-2 mt-7 rounded-3xl w-[7rem] h-10">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;