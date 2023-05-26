import Header from "./header";
import { Wrapper } from "./style";

const Layout = ({ children }: any) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
