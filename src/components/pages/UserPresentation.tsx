import { VFC } from 'react';

export type User = {
  login: string;
  avatar_url?: string;
};

type Prop = {
  user: User;
  isLoading: boolean;
};
const UserPresentation: VFC<Prop> = ({ user, isLoading }) => {
  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <p>Login ID : {user.login}</p>
      {user.avatar_url && <img alt="user" src={user.avatar_url} />}
    </>
  );
};

export default UserPresentation;
