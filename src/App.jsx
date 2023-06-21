import { Admin } from "./pages/Admin/Admin";
import Signin from "./pages/Auth/Signin";
import { Navbar } from "./components/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      {/* <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"> */}
        {/* <Navbar /> */}
        <Routes>
          <Route
            path="/admin/admins"
            element={
              <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
                <Navbar />
                <Admin />
              </div>
            }
          />
          <Route path="/auth/signin" element={<Signin />} />
        </Routes>
        <ToastContainer />
      {/* </div> */}
    </Router>
  );
}

export default App;
