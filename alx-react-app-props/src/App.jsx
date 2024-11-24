import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
    <ProfilePage />
  </UserContext.Provider>);
}

export default App;