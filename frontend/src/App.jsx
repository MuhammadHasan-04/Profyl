import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import { Signup } from "./pages/Signup.jsx";
import { ResumeGeneration } from "./pages/ResumeGeneration.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/resumePreview" element={<ResumeGeneration />}></Route>
      </Routes>
    </>
  );
}

export default App;
