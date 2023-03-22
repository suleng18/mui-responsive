import { Box, Container, Stack, Typography } from '@mui/material';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// function App() {
//   return (
//     <Box>
//       <Navbar />
//       <Stack direction="row" spacing={2} justifyContent="space-between">
//         <Sidebar />
//         <Feed />
//         <Rightbar />
//       </Stack>
//       <Add />
//     </Box>
//   );
// }

export default App;
