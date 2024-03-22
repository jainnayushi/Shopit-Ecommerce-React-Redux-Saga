import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import Navbar from "./components/Navbar";

function App({ isAuthenticated, isAdmin }) {
  return (
    <>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
