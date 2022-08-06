import { Routes, Route } from "react-router-dom";
import Auth from "./auth/pages/Auth";
import Home from "./pages/Home";
import Todo from "./todo/pages/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}/>
        <Route path="/todo" element={<Todo />}/>
      </Routes>
    </div>
  );
}

export default App;
