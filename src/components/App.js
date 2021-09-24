import React from 'react';
import Profile from './Profile/Profile';
import Statistic from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';

import user from '../json/user.json';
import statisticData from '../json/statistic.json';
import friends from '../json/friendList.json';
import transactions from '../json/transaction.json';

const App = () => {
  return (
    <div>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic title="Upload STATS" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
