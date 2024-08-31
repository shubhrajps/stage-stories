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
    <div className="user-circles" style={{ display: 'flex', overflowX: 'auto', padding: '10px', backgroundColor: '#f0f0f0' }}>
      {userStories.map((user: UserStory) => (
        <UserCircle key={user.userId} user={user} onClick={onUserSelect} />
      ))}
    </div>
  );
};

export default UserCircleList;