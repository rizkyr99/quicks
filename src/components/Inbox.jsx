import React from 'react';
import { useSelector } from 'react-redux';
import InboxList from './InboxList';
import InboxRoom from './InboxRoom';

const Inbox = () => {
  const inbox = useSelector((state) => state.inbox.value);
  return <>{!inbox ? <InboxList /> : <InboxRoom />}</>;
};

export default Inbox;
