import userDate from "./userData.json";
import friends from "./friends.json"
import transactions from "./transactions.json";

import Profile from "./components/Profile/Profile"
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"
function App() {
  return (
    <div>
      <Profile
        name={userDate.username}
        tag={userDate.tag}
        location={userDate.location}
        image={userDate.avatar}
        stats={userDate.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App;
