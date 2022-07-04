import Sidebar from "./components/Sidebar";
import Income from "./pages/Income";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-nowrap h-full min-h-screen bg-slate-900">
      <Sidebar />

      <main className="flex flex-row flex-wrap h-full w-full px-10 max-w-screen-xl mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
