import React from 'react';
import { Box } from "@chakra-ui/react";
import './App.css';
import Ticket from './Components/Ticket/Ticket';
import ToastTest from './toastTest';

function App() {
  return (
    <Box>
      <Ticket />
      <ToastTest/>
    </Box>
  );
}

export default App;
