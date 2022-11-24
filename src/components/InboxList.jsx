import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchIcon from '../assets/SearchIcon.svg';
import InboxItem from './InboxItem';
import { TailSpin } from 'react-loader-spinner';

const InboxList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        'app-id': '637ecdc65b73281e5b50ba69',
      },
    };
    axios
      .get(
        'https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',
        config
      )
      .then((res) => {
        setList(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading)
    return (
      <div className='h-full flex flex-col gap-4 items-center justify-center font-bold'>
        <TailSpin color='#BDBDBD' radius='1' />
        Loading Chats...
      </div>
    );
  return (
    <div className='px-8 py-6'>
      <div className='h-10 w-full border border-gray1 rounded-md px-20 text-gray1 placeholder:text-gray1 flex items-center'>
        <input
          type='text'
          className='w-full h-full outline-none'
          placeholder='Search'
        />
        <img src={SearchIcon} alt='' />
      </div>
      <div className='divide-y divide-gray3 w-full overflow-hidden'>
        {list.map((item) => (
          <InboxItem
            title={item.owner.firstName}
            date={item.publishDate}
            message={item.message}
            userId={item.owner.id}
          />
        ))}
      </div>
    </div>
  );
};

export default InboxList;
