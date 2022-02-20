// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserPresentation from './UserPresentation';

export default {
  title: 'UserPresentation',
  component: UserPresentation,
} as ComponentMeta<typeof UserPresentation>;

const Template: ComponentStory<typeof UserPresentation> = ({
  user,
  isLoading,
}) => <UserPresentation user={user} isLoading={isLoading} />;

export const testUser = Template.bind({});
testUser.args = {
  user: {
    login: 'test',
    avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
  },
  isLoading: false,
};
