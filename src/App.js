import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Posts from "./pages/Posts";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Posts/>}></Route>
      <Route path="posts" element={ <Posts/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
