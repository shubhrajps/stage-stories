// app/UserCircleList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import UserCircle from './UserCircle';
import { UserStory } from '@/assets/stories';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserCircleList: React.FC<{ onUserSelect: (userId: string) => void }> = ({ onUserSelect }) => {
  const { data: userStories, error } = useSWR('/api/fetchAllStories', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!userStories) return <div>Loading...</div>;

  return (
    <div className="flex overflow-x-auto mx-4 py-8 snap-x snap-mandatory">
      {userStories.map((user: UserStory) => (
        <div key={user.userId} className="flex-shrink-0 snap-center">
          <UserCircle user={user} onClick={onUserSelect} />
        </div>
      ))}
    </div>
  );
};

export default UserCircleList;