import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import { Signup } from "./pages/Signup.jsx";
import { ResumeGeneration } from "./pages/ResumeGeneration.jsx";
import { TemplatePage } from "./components/Templates/TemplatePage.jsx";
import { useState } from "react";
function App() {
  const [currentTemplate, setCurrentTemplate] = useState("default");
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/resumePreview"
          element={<ResumeGeneration currentTemplate={currentTemplate} />}
        ></Route>
        <Route
          path="/templates"
          element={
            <TemplatePage
              currentTemplate={currentTemplate}
              setCurrentTemplate={setCurrentTemplate}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
