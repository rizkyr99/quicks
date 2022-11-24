import React, { useState } from 'react';
import ChevronDownIcon from '../assets/ChevronDownIcon.svg';

import MoreHorizontalIcon from '../assets/MoreHorizontalIcon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditIcon from '../assets/EditIcon.svg';
import { Disclosure, Transition } from '@headlessui/react';

const TaskItem = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Disclosure>
      <div className='grid grid-cols-[max-content,1fr] gap-x-4 py-6 [&:not(:first-child)]:border-t border-gray3'>
        <input type='checkbox' />
        <div className='flex justify-between'>
          <h2 className='text-sm font-bold'>
            Close off Case #012920- RODRIGUES, Amiguel
          </h2>
          <div className='flex gap-x-2 items-center pr-4'>
            <span className='text-sm text-indicator3'>2 Days Left</span>
            <span className='text-sm'>12/06/2021</span>
            <Disclosure.Button>
              <img src={ChevronDownIcon} alt='' className='cursor-pointer' />
            </Disclosure.Button>
            <img src={MoreHorizontalIcon} alt='' className='cursor-pointer' />
          </div>
        </div>
      </div>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'>
        <Disclosure.Panel className='pl-7 space-y-3 pb-6'>
          <div className='grid grid-cols-[max-content,1fr] gap-x-3 items-center'>
            <svg
              width='31'
              height='31'
              viewBox='0 0 31 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 fill-gray2'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M15.2508 2.51465C8.31048 2.51465 2.69031 8.1474 2.69031 15.0877C2.69031 22.0281 8.31048 27.6608 15.2508 27.6608C22.2038 27.6608 27.8365 22.0281 27.8365 15.0877C27.8365 8.1474 22.2038 2.51465 15.2508 2.51465ZM15.2637 25.1462C9.70636 25.1462 5.20519 20.6451 5.20519 15.0878C5.20519 9.53045 9.70636 5.02928 15.2637 5.02928C20.821 5.02928 25.3221 9.53045 25.3221 15.0878C25.3221 20.6451 20.821 25.1462 15.2637 25.1462ZM14.0061 8.80121H15.8921V15.4021L21.55 18.7591L20.607 20.3056L14.0061 16.3451V8.80121Z'
              />
            </svg>

            <DatePicker
              selected={startDate}
              name=''
              id=''
              className='relative h-10 w-48 border border-gray3 rounded-md px-3 outline-none'
            />
          </div>
          <div className='grid grid-cols-[max-content,1fr] gap-x-3 items-start'>
            <img src={EditIcon} alt='' className='h-5 w-5' />
            <p className='pr-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              ipsum nesciunt sint error assumenda corrupti placeat. Laudantium
              tenetur debitis facere obcaecati voluptatibus. Neque repellendus
              quas, culpa laborum quidem iure dolor.
            </p>
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default TaskItem;
