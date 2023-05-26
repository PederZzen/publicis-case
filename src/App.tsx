import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import Layout from "./components/layout";
import Clients from "./pages/clients";
import Campaigns from "./pages/campaigns";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route index element={<Campaigns />} />
          <Route path="/users" element={<Users />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
