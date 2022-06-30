import Link from 'next/link';

const Footer = () => {
  return (
    //   put footer at the bottom of the page
    <footer
      className={
        'bg-gray-300 px-[5%] py-16 flex flex-col justify-center items-center'
      }
    >
      <div>&copy; {new Date().getFullYear()} Library Manager</div>
      <Link href="https://github.com/tasnimzotder/library-manager">
        <a>GitHub</a>
      </Link>
    </footer>
  );
};

export default Footer;
