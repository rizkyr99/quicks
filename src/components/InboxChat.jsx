import React, { useState } from 'react';
import MoreHorizontalIcon from '../assets/MoreHorizontalIcon.svg';

const InboxChat = ({ message, user, time }) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div>
      <h2
        className={`${
          user === 'You' ? 'text-right text-chatsLabel2' : 'text-chatsLabel1'
        } font-bold text-sm`}>
        {user}
      </h2>
      <div
        className={`flex items-start gap-x-1 ${
          user === 'You' && 'justify-end'
        }`}>
        <div
          className={`${user !== 'You' && 'order-2'} relative cursor-pointer`}
          onClick={() => setShowOption(!showOption)}>
          <img src={MoreHorizontalIcon} alt='' />
          <div
            className={`${
              showOption ? 'block' : 'hidden'
            } absolute w-32 bg-white border border-gray4 rounded-md divide-y divide-gray4 z-50`}>
            <div className='px-4 py-2 text-primary'>Edit</div>
            <div className='px-4 py-2 text-indicator3'>Delete</div>
          </div>
        </div>
        <div
          className={`${
            user === 'You' ? 'bg-chats2' : 'bg-chats1'
          } py-1 px-2 rounded-md flex-1 max-w-sm`}>
          <p className='text-sm text-gray2'>{message}</p>
          <span className='text-gray2 text-xs'>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default InboxChat;
