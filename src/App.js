import { Routes, Route, Navigate } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/notes" replace={true} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
