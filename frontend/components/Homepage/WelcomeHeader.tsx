import { useAuth } from '../../context/authContext';

const WelcomeHeader = () => {
  const { user } = useAuth();

  const capitalizeText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className={'pb-5 text-xl'}>
      {user ? (
        <div>
          Welcome back,{' '}
          <span className={'font-medium'}>{capitalizeText(user)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default WelcomeHeader;
