import React from 'react';
import { useDispatch } from 'react-redux';
import UserIcon from '../assets/UserIcon.svg';
import UserWhiteIcon from '../assets/UserWhiteIcon.svg';
import { setInbox } from '../features/inbox/inboxSlice';

const InboxItem = ({ title, date, message, userId }) => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-cols-[max-content,1fr] gap-x-2 py-6 overflow-hidden'>
      <div className='flex items-center'>
        <div className='h-9 w-9 bg-gray5 rounded-full flex items-center justify-center'>
          <img src={UserIcon} alt='' />
        </div>
        <div className='h-9 w-9 bg-primary rounded-full flex items-center justify-center -ml-4'>
          <img src={UserWhiteIcon} alt='' />
        </div>
      </div>
      <div className='w-full'>
        <div className='flex h-fit items-center gap-x-3'>
          <h2
            className='text-primary font-bold hover:underline cursor-pointer'
            onClick={() => dispatch(setInbox(userId))}>
            {title}
          </h2>
          <span className='text-gray2 text-sm'>
            {new Date(date).toLocaleString()}
          </span>
        </div>
        <h3 className='text-sm font-bold text-gray2'>Cameron Philips:</h3>
        <p className='w-64 text-sm text-gray2 overflow-hidden text-ellipsis whitespace-nowrap block'>
          {message}
        </p>
      </div>
    </div>
  );
};

export default InboxItem;
