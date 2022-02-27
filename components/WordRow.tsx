import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

type WordRowInputProps = {
  children: any
}

const WordRowInput = ({ children }: WordRowInputProps) => {
  return (
    <HStack color="white" justifyContent="center" mb={2}>
      {children}
    </HStack>
  )
}

export default WordRowInput
