import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, verifyOtp } from "../Redux/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // OTP Input State
  const [otpSent, setOtpSent] = useState(false); // Track OTP Sent
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.user);

  if (!isOpen) return null;

  const handleLogin = async () => {
    if (!email) return toast.warning("Please enter an email!");

    dispatch(loginUser(email)).then((res) => {
      if (!res.error) {
        setOtpSent(true); // Show OTP input field
      } else {
        toast.error(res.payload || "Login failed, please try again.");
      }
    });
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter the OTP!");

    dispatch(verifyOtp({ email, otp })).then((res) => {
      if (!res.error) {
        toast.success("Login successful!");
        onClose(); // Close modal on successful login
      } else {
        toast.error(res.payload || "Invalid OTP, please try again.");
      }
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg flex flex-row md:flex-row transition-all duration-300 shadow-lg">
        {/* Left Side Image */}
        <div className="bg-blue-600">
          <img
            src={`${process.env.PUBLIC_URL}/login.png`}
            alt="Login"
            className="md:w-[250px] md:h-[550px] w-[200px] h-[400px] object-fit"
          />
        </div>

        {/* Right Side Login Form */}
        <div className="px-6 py-4 flex flex-col w-full">
          <button className="self-end text-gray-500" onClick={onClose}>
            &#x2715;
          </button>
          <h3 className="text-lg font-semibold">
            {otpSent ? "Enter OTP" : "Enter Email"}
          </h3>

          {!otpSent ? (
            <>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-2 border rounded w-full"
              />
              <button
                onClick={handleLogin}
                className="mt-4 bg-orange-500 text-white p-2 rounded text-center font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-2 p-2 border rounded w-full"
              />
              <button
                onClick={handleVerifyOtp}
                className="mt-4 bg-green-500 text-white p-2 rounded text-center font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}

          {isError && <p className="text-red-500 mt-2">{isError}</p>}
          <p className="mt-4 text-center text-sm text-blue-500">
            New to Flipkart?{" "}
            <span className="font-semibold cursor-pointer">Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
