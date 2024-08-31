import Image from 'next/image';
import React from 'react';
import { UserStory } from "@/assets/stories";

interface UserCircleProps {
  user: UserStory;
  onClick: (userId: string) => void;
}

const UserCircle: React.FC<UserCircleProps> = ({ user, onClick }) => {
  return (
    <div
      className="user-circle"
      onClick={() => onClick(user.userId)}
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px',
        cursor: 'pointer',
      }}
    >
      <Image alt={user?.userId} src={user?.stories[0].url} width={300} height={300} />
    </div>
  );
};

export default UserCircle;