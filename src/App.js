import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import user from "./components/db/user.json";

import Statistics from "./components/Statistic/Statistic";
import data from "./components/db/data.json";

import FriendsList from "./components/FriendsList/FriendsList";
import friends from "./components/db/friends.json";

import TransactionHistory from "./components/Transactions/Transactions";
import transactions from "./components/db/transactions.json";

function App() {
  return (
    <div className="App">
      <div className="Profile">
        <Profile data={user} />
      </div>
      <div className="Statistic">
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="FriendsList">
        <FriendsList friends={friends} />
      </div>
      <div className="Transaction">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
