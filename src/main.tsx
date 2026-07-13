import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import SignIn from "./pages/Account/SignIn.tsx";
import SignUp from "./pages/Account/SignUp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
          </Route>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
);
