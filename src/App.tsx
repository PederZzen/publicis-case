import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import Layout from "./components/layout";
import Clients from "./pages/clients";
import Campaigns from "./pages/campaigns";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Users />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
