import Header from "./header";

interface IUsers {
  children: any;
}

const Layout = ({ children }: IUsers) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
