import React, { useEffect, useState } from 'react';
import QuicksButtonIcon from '../assets/QuicksButtonIcon.svg';
import TaskButtonIcon from '../assets/TaskButtonIcon.svg';
import TaskButtonWhiteIcon from '../assets/TaskButtonWhiteIcon.svg';
import InboxButtonIcon from '../assets/InboxButtonIcon.svg';
import InboxButtonWhiteIcon from '../assets/InboxButtonWhiteIcon.svg';
import InboxList from './InboxList';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabs } from '../features/tabs/tabsSlice';
import TaskList from './TaskList';
import Inbox from './Inbox';

const QuickButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = useSelector((state) => state.tabs.value);
  const [quicksIcon, setQuicksIcon] = useState(QuicksButtonIcon);
  const [quicksColor, setQuicksColor] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (tabs) {
      dispatch(changeTabs(null));
    }
  };

  useEffect(() => {
    if (tabs === 'inbox') {
      setQuicksIcon(InboxButtonWhiteIcon);
      setQuicksColor('bg-indicator2');
    } else if (tabs === 'task') {
      setQuicksIcon(TaskButtonWhiteIcon);
      setQuicksColor('bg-indicator');
    } else {
      setQuicksIcon(QuicksButtonIcon);
      setQuicksColor('bg-primary');
    }
  }, [tabs]);

  return (
    <>
      <div className='fixed bottom-7 right-8'>
        <div
          className={`relative ${quicksColor} ${
            tabs && 'shadow-[-16px_0_0_0_rgba(79,79,79,1)]'
          } h-[68px] w-[68px] flex items-center justify-center rounded-full z-50 cursor-pointer transition duration-300`}
          onClick={() => handleClick()}>
          <img src={quicksIcon} alt='' />
        </div>
        <div
          className={`absolute inset-0 h-[60px] w-[60px] bg-white rounded-full top-1 flex items-center justify-center z-1 transition ${
            isOpen ? 'opacity-100' : 'opacity-0'
          } ${isOpen && !tabs && '-translate-x-20'} ${
            isOpen && tabs === 'task' && '-translate-x-24'
          }`}
          onClick={() => dispatch(changeTabs('inbox'))}>
          <img src={InboxButtonIcon} alt='' />
        </div>
        <div
          className={`absolute inset-0 h-[60px] w-[60px] bg-white rounded-full top-1 flex items-center justify-center z-1 transition delay-75 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          } ${isOpen && !tabs && '-translate-x-40'} ${
            isOpen && tabs === 'inbox' && '-translate-x-24'
          }`}
          onClick={() => dispatch(changeTabs('task'))}>
          <img src={TaskButtonIcon} alt='' />
        </div>
      </div>

      <div
        className={`${
          tabs ? 'translate-y-0' : 'translate-y-[1000px]'
        } fixed bottom-28 left-0 right-0 px-8 justify-end flex transition z-40`}>
        <div className='bg-white border border-[#BDBDBD] rounded-md h-[737px] w-full max-w-[734px] overflow-hidden'>
          {tabs === 'inbox' ? <Inbox /> : <TaskList />}
        </div>
      </div>
    </>
  );
};

export default QuickButton;
