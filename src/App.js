import { Routes, Route } from "react-router";

import Navigation from "./components/Navigation";
import Create from "./pages/Create";
import Notes from "./pages/Notes";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
