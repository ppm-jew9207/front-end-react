import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  let { userId } = useParams();

  return (
    <div>
      <label>You are redirected to profile number {userId}</label>
    </div>
  );
};

export default ProfilePage;
