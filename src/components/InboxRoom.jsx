import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowLeftIcon from '../assets/ArrowLeftIcon.svg';
import CloseIcon from '../assets/CloseIcon.svg';
import { setInbox } from '../features/inbox/inboxSlice';
import MoreHorizontalIcon from '../assets/MoreHorizontalIcon.svg';
import InboxChat from './InboxChat';
import axios from 'axios';

const InboxRoom = () => {
  const inbox = useSelector((state) => state.inbox.value);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        'app-id': '637ecdc65b73281e5b50ba69',
      },
    };
    axios
      .get(`https://dummyapi.io/data/v1/user/${inbox}/comment`, config)
      .then((res) => {
        setMessages(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) return null;
  return (
    <div className='relative h-full w-full flex flex-col'>
      <div className='flex items-center gap-x-4 border-b border-gray4 h-20 px-6'>
        <img
          src={ArrowLeftIcon}
          alt=''
          className='cursor-pointer'
          onClick={() => dispatch(setInbox(null))}
        />
        <div className='flex-1'>
          <h1 className='font-bold text-primary'>
            I-589 - AMARKHIL, Obaidullah [Affirmative Filling with ZHN]
          </h1>
          <p className='text-gray2 text-sm'>3 Participants</p>
        </div>
        <img src={CloseIcon} alt='' className='cursor-pointer' />
      </div>
      <div className='pl-8 pr-6 py-2 mb-16 space-y-2 overflow-y-auto'>
        {messages.map((message) => (
          <InboxChat
            message='No worries.'
            user={message.owner.firstName}
            time='19:32'
          />
        ))}
      </div>
      <div className='absolute bottom-0 left-0 right-0 flex gap-x-3 px-6 py-4'>
        <input
          type='text'
          placeholder='Type a new message'
          className='flex-1 border border-gray2 rounded-md px-3 placeholder:text-gray2 text-sm'
        />
        <button className='px-4 py-2 bg-primary text-white rounded-md'>
          Send
        </button>
      </div>
    </div>
  );
};

export default InboxRoom;
