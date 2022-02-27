import { Center } from '@chakra-ui/react'
import React from 'react'

type SingleLetterProps = {
  letter: string
  isPreviousGuess: boolean
  letterStyle: string
}

const SingleLetterInput = ({
  letter,
  letterStyle,
  isPreviousGuess,
}: SingleLetterProps) => {
  return (
    <Center
      color="white"
      bg={letterStyle}
      p="4"
      border={isPreviousGuess ? '0' : '1px'}
      borderColor="gray.700"
      // borderRadius="lg"
      boxSize="14"
      fontWeight="bold"
      fontSize="xl"
    >
      {letter.toUpperCase()}
    </Center>
  )
}

export default SingleLetterInput
