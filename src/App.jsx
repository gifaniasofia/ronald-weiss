import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='overflow-hidden'>
      <Outlet />
    </main>
  );
}

export default App;
