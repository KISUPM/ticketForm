import React from 'react';
import { Box } from "@chakra-ui/react";
import './App.css';
import Ticket from './Components/Ticket/Ticket';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box>
      <Ticket />
    </Box>
  );
}

export default App;
