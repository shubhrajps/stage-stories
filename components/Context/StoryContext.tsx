'use client'
import React, { createContext, useState, useEffect } from 'react';
import { UserStory } from '@/assets/stories';

interface StoryContextType {
  selectedUser: UserStory | null;
  allUserStories: UserStory[];
  setAllUserStories: (userStories: UserStory[]) => void;
  setSelectedUser: (user: UserStory | null) => void;
}

export const StoryContext = createContext<StoryContextType>({
  selectedUser: null,
  allUserStories: [],
  setAllUserStories: () => {},
  setSelectedUser: () => {},
});

export const StoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState<UserStory | null>(null);
  const [allUserStories, setAllUserStories] = useState<UserStory[]>([]);

  useEffect(() => {
    const fetchUserStories = async () => {
      const response = await fetch('/api/fetchAllStories');
      const data: UserStory[] = await response.json();
      setAllUserStories(data);
    };

    fetchUserStories();
  }, []);

  return (
    <StoryContext.Provider value={{ selectedUser, setSelectedUser, allUserStories, setAllUserStories }}>
      {children}
    </StoryContext.Provider>
  );
}