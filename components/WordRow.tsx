import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const WordRowInput = ({ children }) => {
  return (
    <HStack color="white" justifyContent="center" mb={2}>
      {children}
    </HStack>
  )
}

export default WordRowInput
