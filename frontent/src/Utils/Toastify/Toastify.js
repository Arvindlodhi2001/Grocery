import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = (type, message) => {
  console.log("success", type, message);

  const options = {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  switch (type) {
    case "success":
      console.log("success");
      toast.success(`${message}! ✅`, options);
      break;
    case "error":
      toast.error(`${message}! ❌`, options);
      break;
    case "info":
      toast.info(`${message}! ℹ️`, options);
      break;
    case "warning":
      toast.warn(`${message}! ⚠️`, options);
      break;
    default:
      toast(`${message}! 🔔`, options);
  }
};

export default Toastify;
