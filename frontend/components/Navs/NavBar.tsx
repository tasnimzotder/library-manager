import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  return (
    <>
      <nav
        className={
          'bg-primary-light flex flex-row justify-evenly px-10 py-3 text-white'
        }
      >
        <div
          className={'text-lg font-medium cursor-pointer'}
          onClick={() => {
            router.push('/');
          }}
        >
          Library Manager
        </div>

        <div className={'flex flex-row gap-3 justify-center items-center'}>
          <div>
            <Link href="/add-book">
              <a>Books</a>
            </Link>
          </div>

          <div>
            <Link href="/auth">
              <a>Auth</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
