import Image from 'next/image';
import React from 'react';
import { UserStory } from "@/assets/stories";

interface UserCircleProps {
  user: UserStory;
  onClick: (user: UserStory) => void;
}

const UserCircle: React.FC<UserCircleProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)}>
      <Image 
        alt={user?.userId} 
        src={user?.stories[0].url} 
        width={60} 
        height={60} 
        className='border border-black h-[80px] w-[80px] rounded-full mx-2' 
      />
    </div>
  );
};

export default UserCircle;