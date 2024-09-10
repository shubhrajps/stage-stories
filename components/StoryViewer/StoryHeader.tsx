import React, { useContext } from 'react';
import { UserIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { StoryContext } from '../Context/StoryContext';
import { motion } from 'framer-motion';

const StoryHeader: React.FC = () => {
  const { selectedUser, setSelectedUser } = useContext(StoryContext);
  return (
    <>
      <div className="flex items-center">
        <UserIcon data-testid="user-icon" className="h-6 w-6 text-white mr-2" />
        <span className="font-bold">{selectedUser?.userId}</span>
      </div>
      <motion.button
        onClick={()=>setSelectedUser(null)} aria-label="Close"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex-shrink-0 snap-center"
      >
        <XMarkIcon data-testid="close-icon" className="h-6 w-6 text-white" /> 
      </motion.button>
    </>
  );
};

export default StoryHeader;