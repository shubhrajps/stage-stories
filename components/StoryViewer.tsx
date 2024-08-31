import React, { useContext } from 'react';
import StoryHeader from './StoryHeader';
import Stories from 'react-insta-stories';
import { Story } from '@/assets/stories';
import { StoryContext } from './StoryContext';

const StoryViewer: React.FC = () => {

  const { selectedUser, setSelectedUser } = useContext(StoryContext);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black flex flex-col z-50">
      <div className="absolute top-8 left-4 right-4 flex justify-between items-center text-white shadow-md z-10">
        <StoryHeader />
      </div>
      <div className="flex-1 z-0">
        <Stories
          stories={selectedUser?.stories}
          defaultInterval={5000}
          width="100%"
          height="100%"
          loop={false}
          keyboardNavigation={true}
          onStoryStart={(story: Story) => console.log('Story started', story)}
          onStoryEnd={(story: Story, storyIndex: number) =>
            console.log('Story ended', story, storyIndex)
          }
          onAllStoriesEnd={() => console.log('All stories ended')}
        />
      </div>
    </div>
  )
}

export default StoryViewer