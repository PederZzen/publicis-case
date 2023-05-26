import Header from "./header";
import { Wrapper } from "./style";

interface IUsers {
  children: any;
}

const Layout = ({ children }: IUsers) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
