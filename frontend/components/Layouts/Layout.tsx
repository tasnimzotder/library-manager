import NavBar from '../Navs/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className={'px-[6%] py-[2%]'}>{children}</main>
    </>
  );
};

export default Layout;
