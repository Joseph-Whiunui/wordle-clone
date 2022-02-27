import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import colours from '../lib/colours'
type KeyboardLetterProps = {
  letter: string
  keyBoardLetterStatus: any
  letterStatus: any
  handleKeyboardInput: any
}

const KeyboardLetter = ({
  letter,
  keyBoardLetterStatus,
  letterStatus,
  handleKeyboardInput,
}: KeyboardLetterProps) => {
  const status =
    letter in keyBoardLetterStatus
      ? keyBoardLetterStatus[letter]
      : letterStatus.unknown
  let bg = colours.keyboard.default
  if (status === letterStatus.correct) {
    bg = colours.keyboard.correct
  } else if (status === letterStatus.misplaced) {
    bg = colours.keyboard.misplaced
  } else if (status === letterStatus.missed) {
    bg = colours.keyboard.missed
  }
  return (
    <Button
      bg={bg}
      height="12"
      width="8"
      minWidth="0"
      color="white"
      className="keyboard-letter"
      onClick={() => {
        handleKeyboardInput(letter)
      }}
    >
      {letter}
    </Button>
  )
}

export default KeyboardLetter
