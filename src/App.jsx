import { useState } from 'react'
import './App.css'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import { Gridlayout } from './components/Gridlayout'
import { TableHead } from './utils/Constants'
import { EverdayData } from './utils/EverdayData'

function App() {
  const [count, setCount] = useState(0);
  console.log(TableHead);

  return (
    <Box id="main-content">
      <Box id='top-border-rotator'></Box>
      <Paper className='paper_st' elevation={4}>
        <Typography mb={2.5} variant='h5' fontWeight='600'>Personality Development</Typography>
        <Gridlayout data={TableHead} type='head'/>
        <Box mt={2}></Box>
        <Gridlayout data={EverdayData} type='content'/>
      </Paper>
    </Box>
  )
}

export default App
