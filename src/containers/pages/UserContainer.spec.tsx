import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { User } from 'components/pages/UserPresentation';
// eslint-disable-next-line
import HttpRequestMock from 'http-request-mock';
import UserContainer from './UserContainer';

// eslint-disable-next-line
const mocker = HttpRequestMock.setup();

// eslint-disable-next-line
mocker.get(
  'https://api.github.com/users/defunkt',
  '{"login": "test", "avatar_url": "http://example.com"}',
);
const mockPresentation = jest.fn();
jest.mock('components/pages/UserPresentation', () => (props: User) => {
  mockPresentation(props);

  return 'mockPresentation';
});
afterEach(() => {
  jest.restoreAllMocks();
});
test('コンポーネントとkyをモックにしてテスト', async () => {
  render(<UserContainer />);

  await waitFor(async () => {
    expect(mockPresentation).toHaveBeenCalledWith(
      await expect.objectContaining({
        user: { login: 'test', avatar_url: 'http://example.com' },
        isLoading: false,
      }),
    );
  });
});
