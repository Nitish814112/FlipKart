

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white   rounded-lg flex flex-row md:flex-row transition-all duration-300">
        {/* Left Side Image */}
        <div className=" bg-blue-600 ">
          <img src="../login.png" alt="Login" className="md:w-[250px] md:h-[550px] w-[200px] h-[400px] object-fit" />
        </div>

        {/* Right Side Login Form */}
        <div className=" p-6 flex flex-col">
          <button className="self-end text-gray-500" onClick={onClose}>&#x2715;</button>
          <h3 className="text-lg font-semibold">Enter Email/Mobile Number</h3>
          <input type="text" placeholder="Enter Email/Mobile number" className="mt-2 p-2 border rounded w-full" />
          <p className="text-xs text-gray-500 mt-2">
            By continuing, you agree to Flipkart's <span className="text-blue-500">Terms of Use</span> and <span className="text-blue-500">Privacy Policy</span>.
          </p>
          <button className="mt-4 bg-orange-500 text-white p-2 rounded text-center font-semibold">Request OTP</button>
          <p className="mt-4 text-center text-sm text-blue-500">New to Flipkart? <span className="font-semibold cursor-pointer">Create an account</span></p>
        </div>
      </div>
    </div>
  );
};



export default Login;
