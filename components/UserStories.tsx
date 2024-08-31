"use client"
import { Story, UserStory } from '@/assets/stories';
import { useEffect, useState } from 'react';
import Stories from 'react-insta-stories';
import useSWR from 'swr';
import UserCircleList from './UserCircleList';

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
    <div className="stories-container">
      {isMobile ? 
      <>
        <UserCircleList onUserSelect={handleUserClick} />
        {selectedUserStories.length > 0 && 
          <Stories
            stories={selectedUserStories}
            defaultInterval={5000}
            width={375}
            height={667}
            loop={false}
            keyboardNavigation={true}
            onStoryStart={(story: Story) => console.log('Story started', story)}
            onStoryEnd={(story: Story, storyIndex: Number) =>
              console.log('Story ended', story, storyIndex)
            }
            onAllStoriesEnd={() => console.log('All stories ended')}
          />}
      </> : <p className='text-xl'>Stories are not available on desktop</p>}
    </div>
  );
}