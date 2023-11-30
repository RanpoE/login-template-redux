// import Mock from './containers/mock';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "./components/pages";
import { About } from "./components/pages/about";
import RootLayout from "./components/pages/RootLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useSelector } from "react-redux";
import { Signup } from "./pages";
import CreateForm from "./components/pages/CreatePost";
import UploadComponent from "./utils/upload";
// import Mock from "./containers/mock";
function App() {
  const theme = useSelector(state => state.theme);
  console.log(theme, " theme")
  return (
    <Router>
      <div className={`App ${theme ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route element={<RootLayout />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<CreateForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
