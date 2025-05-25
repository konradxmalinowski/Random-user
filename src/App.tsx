import { useContext } from 'react';
import Button from './Components/Button';
import UserUI from './Components/UserUI';
import { UserContext } from './store/UserContextProvider';

function App() {
  const context = useContext(UserContext);
  const handleFetchUser: () => void = context.handleFetchUser;

  return (
    <main className="bg-background2 text-white min-w-80 w-[40vw] rounded-2xl p-9">
      <UserUI />
      <Button
        category="Generate"
        handleClick={handleFetchUser}
        className="fixed top-6 left-1/2 -translate-x-1/2"
      />
    </main>
  );
}

export default App;
