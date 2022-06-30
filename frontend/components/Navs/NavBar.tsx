import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/authContext';

const NavBar = () => {
  const router = useRouter();
  const { user, handleLogout } = useAuth();

  const HandleAuth = () => {
    return (
      <>
        {user ? (
          <div
            className={'cursor-pointer'}
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </div>
        ) : (
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        )}
      </>
    );
  };

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
            <Link href="/library/add-book">
              <a>Add Book</a>
            </Link>
          </div>

          <div>
            {/* <Link href="/auth">
              <a>{user ? user : 'Auth'}</a>
            </Link> */}
            <HandleAuth />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
