import { useEffect, useState, VFC } from 'react';
import ky from 'ky';

type User = {
  login: string;
  avatar_url?: string;
};

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return typeof u?.login === 'string';
};

const User: VFC = () => {
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
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <p>Login ID : {user.login}</p>
      {user.avatar_url && <img alt="user" src={user.avatar_url} />}
    </>
  );
};

export default User;
