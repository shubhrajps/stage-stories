import Image from 'next/image';
import React from 'react';
import { UserStory } from "@/assets/stories";
import { motion } from 'framer-motion';

interface UserCircleProps {
  user: UserStory;
  onClick: (user: UserStory) => void;
}

const UserCircle: React.FC<UserCircleProps> = ({ user, onClick }) => {
  return (
    <motion.div
      onClick={() => onClick(user)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex-shrink-0 snap-center"
    >
      <Image 
        alt={user?.userId} 
        src={user?.stories[0].url} 
        width={60} 
        height={60} 
        className='border border-black h-[80px] w-[80px] rounded-full mx-2' 
      />
    </motion.div>
  );
};

export default UserCircle;