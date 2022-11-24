import React from 'react';
import ChevronDownIcon from '../assets/ChevronDownIcon.svg';

import TaskItem from './TaskItem';

const TaskList = () => {
  return (
    <div className='px-8 py-6'>
      <div className='flex justify-between pl-16 cursor-pointer'>
        <div className='relative flex items-center justify-center gap-x-2 border border-gray3 rounded-md h-10 w-32'>
          My Tasks <img src={ChevronDownIcon} alt='' />
        </div>
        <button className='h-10 bg-primary text-white px-4 rounded-md font-bold'>
          New Task
        </button>
      </div>

      <div>
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
};

export default TaskList;
