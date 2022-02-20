import UserPresentation, { User } from 'components/pages/UserPresentation';
import ky from 'ky';
import { useEffect, useState, VFC } from 'react';

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return typeof u?.login === 'string';
};
const UserContainer: VFC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>({ login: 'Loading' });

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const response = await ky
        .get('https://api.github.com/users/defunkt')
        .json();
      if (isUser(response)) {
        setUser(response);
      } else {
        setUser({ login: 'Error' } as User);
      }
      setIsLoading(false);
    };
    void fetch();
  }, []);

  return <UserPresentation user={user} isLoading={isLoading} />;
};

export default UserContainer;
