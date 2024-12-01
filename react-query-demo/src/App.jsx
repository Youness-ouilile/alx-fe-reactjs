import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient();
<ReactQueryDevtools initialIsOpen={false} />
function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
    <PostsComponent /> 
  </QueryClientProvider>
  
  );
}

export default App;
