import React, { useContext } from 'react';
import { XCircleIcon, UserIcon } from '@heroicons/react/16/solid'; // Import the close and user icons from Heroicons
import { StoryContext } from './StoryContext';

const StoryHeader: React.FC = () => {
  const { selectedUser, setSelectedUser } = useContext(StoryContext);
  return (
    <>
      <div className="flex items-center">
        <UserIcon className="h-6 w-6 text-white mr-2" /> {/* User icon */}
        <span className="font-bold">{selectedUser?.userId}</span>
      </div>
      <button onClick={()=>setSelectedUser(null)} aria-label="Close">
        <XCircleIcon className="h-6 w-6 text-red-500" /> {/* Close icon */}
      </button>
    </>
  );
};

export default StoryHeader;