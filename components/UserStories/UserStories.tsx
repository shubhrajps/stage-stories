"use client"
import { useContext, useEffect, useState } from 'react';
import UserCircleList from '../UsersList/UserCircleList';
import StoryViewer from '../StoryViewer/StoryViewer';
import { StoryContext } from '../Context/StoryContext';

export default function UserStories() {
  const { selectedUser } = useContext(StoryContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <>
        {isMobile ? (
          <>
            {selectedUser === null ? (
              <>
                <p className='font-bold text-3xl text-red-400 mt-6 ml-6'>STAGE</p>
                <UserCircleList />
              </>
            ) : (
              <StoryViewer />
            )}
          </>
        ) : (
          <p className='text-xl'>Stories are not available on desktop</p>
        )}
      </>
  );
}