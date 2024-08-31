import React from 'react';
import { XCircleIcon, UserIcon } from '@heroicons/react/16/solid'; // Import the close and user icons from Heroicons

interface StoryHeaderProps {
  userId: string;
  onClose: Function;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({ userId, onClose }) => {
  return (
    <>
      <div className="flex items-center">
        <UserIcon className="h-6 w-6 text-white mr-2" /> {/* User icon */}
        <span className="font-bold">{userId}</span>
      </div>
      <button onClick={onClose} aria-label="Close">
        <XCircleIcon className="h-6 w-6 text-red-500" /> {/* Close icon */}
      </button>
    </>
  );
};

export default StoryHeader;