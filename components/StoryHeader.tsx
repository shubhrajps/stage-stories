import React, { useContext } from 'react';
import { UserIcon, XMarkIcon } from '@heroicons/react/16/solid'; // Import the close and user icons from Heroicons
import { StoryContext } from './StoryContext';
import { motion } from 'framer-motion';

const StoryHeader: React.FC = () => {
  const { selectedUser, setSelectedUser } = useContext(StoryContext);
  return (
    <>
      <div className="flex items-center">
        <UserIcon className="h-6 w-6 text-white mr-2" /> {/* User icon */}
        <span className="font-bold">{selectedUser?.userId}</span>
      </div>
      <motion.button
        onClick={()=>setSelectedUser(null)} aria-label="Close"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex-shrink-0 snap-center"
      >
        <XMarkIcon className="h-6 w-6 text-white" /> {/* Close icon */}
      </motion.button>
    </>
  );
};

export default StoryHeader;