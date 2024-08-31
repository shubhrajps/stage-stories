'use client';

import React, { useContext } from 'react';
import UserCircle from './UserCircle';
import { UserStory } from '@/assets/stories';
import { StoryContext } from '../Context/StoryContext';

const UserCircleList: React.FC = () => {
  const { setSelectedUser, allUserStories } = useContext(StoryContext);

  const onUserSelect = (user: UserStory) => setSelectedUser(user);

  return (
    <div className="flex overflow-x-auto mx-4 py-8 snap-x snap-mandatory">
      {allUserStories.map((user: UserStory) => (
        <div data-testid="user-circle" key={user.userId} className="flex-shrink-0 snap-center">
          <UserCircle user={user} onClick={onUserSelect} />
        </div>
      ))}
    </div>
  );
};

export default UserCircleList;