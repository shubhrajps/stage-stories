"use client"
import { UserStory } from '@/assets/stories';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import UserCircleList from './UserCircleList';
import StoryViewer from './StoryViewer';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserStories() {
  const { data: userStories, error } = useSWR('/api/fetchAllStories', fetcher);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
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
  },[]);

  if (error) return <div>Failed to load stories</div>;
  if (!userStories) return <div>Loading...</div>;

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
  };

  const selectedUserStories =
    selectedUserId && userStories.find((user: UserStory) => user.userId === selectedUserId)
      ? userStories.find((user: UserStory) => user.userId === selectedUserId)!.stories
      : [];

  return (
    <>
      {isMobile ? 
        <>
          {selectedUserId===null?<>
            <p className='font-bold text-3xl text-red-400 mt-6 ml-6'>STAGE</p>
            <UserCircleList onUserSelect={handleUserClick} />
          </>:
          <>
            {selectedUserStories.length > 0 && <StoryViewer selectedUserId={selectedUserId||''} selectedUserStories={selectedUserStories} closeViewer={()=>setSelectedUserId(null)} />}
          </>}
        </> : <p className='text-xl'>Stories are not available on desktop</p>}
    </>
  );
}