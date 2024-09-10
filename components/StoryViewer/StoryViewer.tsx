  import React, { useContext } from 'react';
  import StoryHeader from './StoryHeader';
  import Stories from 'react-insta-stories';
  import { motion } from 'framer-motion';
  import { StoryContext } from '../Context/StoryContext';

  const StoryViewer: React.FC = () => {

    const { selectedUser, setSelectedUser, allUserStories } = useContext(StoryContext);

    const handleAllStoriesEnd = () => {
      if (!selectedUser) return;
      const currentIndex = allUserStories.findIndex(user => user.userId === selectedUser.userId);
      const nextIndex = (currentIndex + 1) % allUserStories.length;
      const nextUser = allUserStories[nextIndex];
      setSelectedUser(nextUser);
    };
    

    return (
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-black flex flex-col z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
          <div className="absolute top-8 left-4 right-4 flex justify-between items-center text-white shadow-md z-10">
            <StoryHeader />
          </div>
          <div data-testid="stories" className="flex-1 z-0">
            <Stories
              stories={selectedUser?.stories || []}
              defaultInterval={5000}
              width="100%"
              height="100%"
              loop={true}
              preloadCount={5}
              keyboardNavigation={true}
              onAllStoriesEnd={handleAllStoriesEnd}
            />
          </div>
      </motion.div>
    )
  }

  export default StoryViewer