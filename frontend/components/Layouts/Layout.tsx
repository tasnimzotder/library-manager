import Footer from '../Footer';
import NavBar from '../Navs/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'flex flex-col justify-between min-h-screen'}>
      <div>
        <NavBar />
        <main className={'px-[6%] py-[2%]'}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
