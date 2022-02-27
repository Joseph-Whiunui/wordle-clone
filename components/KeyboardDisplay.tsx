import { Box, Button, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import BackspaceSVG from './BackspaceSVG'
import KeyboardLetter from './KeyboardLetter'
type KeyboardDisplayProps = {
  letterStatus: any
  keyBoardLetterStatus: any
  handleKeyboardInput: any
}

const KeyboardDisplay = ({
  letterStatus,
  keyBoardLetterStatus,
  handleKeyboardInput,
}: KeyboardDisplayProps) => {
  return (
    <VStack spacing={1} p="2">
      <HStack spacing={1}>
        <KeyboardLetter
          letter="q"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="w"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="e"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="r"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="t"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="y"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="u"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="i"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="o"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="p"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
      </HStack>
      <HStack spacing={1}>
        <KeyboardLetter
          letter="a"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="s"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="d"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="f"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="g"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="h"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="j"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="k"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="l"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
      </HStack>
      <HStack spacing={1}>
        <Button
          bg="grey"
          color="white"
          height="12"
          width="12"
          fontSize="xs"
          onClick={() => {
            handleKeyboardInput('Enter')
          }}
        >
          ENTER
        </Button>
        <KeyboardLetter
          letter="z"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="x"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="c"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="v"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="b"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="n"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <KeyboardLetter
          letter="m"
          keyBoardLetterStatus={keyBoardLetterStatus}
          letterStatus={letterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
        <Button
          bg="grey"
          height="12"
          width="12"
          color="white"
          onClick={() => {
            handleKeyboardInput('Backspace')
          }}
        >
          <BackspaceSVG />
        </Button>
      </HStack>
    </VStack>
  )
}

export default KeyboardDisplay
