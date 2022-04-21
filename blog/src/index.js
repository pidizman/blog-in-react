import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import NewPost from "./routes/new-post";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/new-post" element={<NewPost />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);