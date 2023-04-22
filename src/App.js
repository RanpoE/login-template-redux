// import Mock from './containers/mock';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/pages";
import { About } from "./components/pages/about";
import RootLayout from "./components/pages/RootLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Signup } from "./pages";
// import Mock from "./containers/mock";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route element={<RootLayout />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/about" element={<About />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
