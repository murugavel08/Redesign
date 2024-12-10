import { Box, Card,Typography } from '@mui/material';
import './App.css';
import TopPage from './Component/SideBarPage';
import HeaderPage from './Component/HeaderOne';
function App() {
  return (
    <div className="App">
      <Card>
      <Card> 
          <TopPage/>
          <HeaderPage/>
      </Card>
      <Card>
        <Box sx={
          {
          gap:2,
          color:'white',
          display:'flex',
          justifyContent:'start',
          alignContent:'space-between'
         }
          }>
          <Box
          sx={{p:2}}> 
            <Typography>welcome</Typography>
          </Box>
          <Box sx={{p:2}}>
        <Typography>hello</Typography>
          bgcolor:'green',
          </Box>
        </Box>
      </Card>
      </Card>
    </div>
  );
}
export default App;
   