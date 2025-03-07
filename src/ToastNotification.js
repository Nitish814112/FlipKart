import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
  // Function to show toast
  const showToast = (type, message) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "info") {
      toast.info(message);
    } else {
      toast.warning(message);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => showToast("success", "Item added to cart!")}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Show Success Toast
      </button>

      <button
        onClick={() => showToast("error", "Something went wrong!")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Show Error Toast
      </button>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ToastNotification;
