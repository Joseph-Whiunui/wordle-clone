import { Box, Button, Center, Stack, useToast } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import KeyboardDisplay from '../components/KeyboardDisplay'
import SiteLayout from '../components/layout/SiteLayout'
import SingleLetterInput from '../components/SingleLetterInput'
import WordRow from '../components/WordRow'
import validAnswerList from '../lib/words/validAnswerList'
import validGuessList from '../lib/words/validGuessList'
import { letterStatus } from '../lib/settings'
import colours from '../lib/colours'

const completeValidGuessList = [...validAnswerList, ...validGuessList]

interface KeyBoardLetterStatusProps {
  [key: string]: string
}

const getRandomWord = function (wordList: string[]) {
  const randomIndex = Math.floor(Math.random() * wordList.length)
  return wordList[randomIndex].split('')
}

const firstSecretWord = getRandomWord(validAnswerList)

const Home: NextPage = () => {
  const [secretWord, setSecretWord] = useState<string[]>(firstSecretWord)
  const [gameOver, setGameOver] = useState(false)
  const wordLength = 5
  const maxGuessCount = 6
  const [currentGuessNumber, setCurrentGuessNumber] = useState(0)
  const [keyBoardLetterStatus, setKeyBoardLetterStatus] =
    useState<KeyBoardLetterStatusProps>({})
  const [previousGuesses, setPreviousGuesses] = useState<string[][]>([])
  const [currentWordGuess, setCurrentWordGuess] = useState<string[]>([])

  const cheat = (e: any) => {
    alert(secretWord.join(''))
    e.currentTarget.blur()
  }
  const resetGame = (e: any) => {
    setCurrentGuessNumber(0)
    setPreviousGuesses([])
    setCurrentWordGuess([])
    setKeyBoardLetterStatus({})
    const newSecretWord = getRandomWord(validAnswerList)
    setSecretWord(newSecretWord)
    setGameOver(false)
    e.currentTarget.blur()
  }

  const handleKeyboardInput = (letter: string) => {
    if (gameOver) {
      return
    }

    const isAlpha = /^[a-zA-Z]{1}$/.test(letter) // :letter.length === 1 &&

    if (isAlpha && currentWordGuess.length < wordLength) {
      letter = letter.toLowerCase()
      setCurrentWordGuess([...currentWordGuess, letter])
    }
    if (letter === 'Backspace') {
      setCurrentWordGuess([...currentWordGuess.slice(0, -1)])
    }
    if (letter === 'Enter') {
      if (currentWordGuess.length < wordLength) {
        notLongEnough()
      } else if (!completeValidGuessList.includes(currentWordGuess.join(''))) {
        notAValidWord()
      } else {
        // devtest && isAPossibleWord
        setPreviousGuesses([...previousGuesses, currentWordGuess])
        setCurrentWordGuess([])
        setCurrentGuessNumber(currentGuessNumber + 1)
      }
    }
  }

  const toast = useToast()
  // const baseToastSettings = {
  //   position: 'top',
  //   duration: 3000,
  //   isClosable: true,
  // }

  const winGame = () => {
    setGameOver(true)

    toast({
      title: 'You win!',
      status: 'success',
      position: 'top',
      duration: 3000,
      isClosable: true,
    })
  }

  const loseGame = () => {
    setGameOver(true)
    toast({
      position: 'top',
      duration: 3000,
      isClosable: true,
      title: 'You lose :(',
      status: 'error',
    })
  }

  const notAValidWord = () => {
    toast({
      position: 'top',
      duration: 3000,
      isClosable: true,
      title: 'Not a valid word',
      status: 'info',
    })
  }

  const notLongEnough = () => {
    toast({
      position: 'top',
      duration: 3000,
      isClosable: true,
      title: 'Not enough letters',
      status: 'info',
    })
  }

  useEffect(() => {
    if (previousGuesses.length > 0 && !gameOver) {
      const lastGuess = previousGuesses.slice(-1)[0]
      if (lastGuess.join('') === secretWord.join('')) {
        winGame()
      } else if (currentGuessNumber === maxGuessCount) {
        loseGame()
      }
    }
  }, [currentGuessNumber, previousGuesses, secretWord, gameOver])

  useEffect(() => {
    const updateGuess = (event: any) => {
      handleKeyboardInput(event.key)
    }
    document.addEventListener('keydown', updateGuess)
    return () => {
      document.removeEventListener('keydown', updateGuess)
    }
  })
  return (
    <SiteLayout>
      <Stack justifyContent={'space-between'} as="main" height={'full'}>
        <Center>
          <Button type="button" onClick={resetGame} m="2">
            Reset
          </Button>
          <Button type="button" onClick={cheat}>
            Cheat
          </Button>
        </Center>
        <Box>
          {[...Array(maxGuessCount).keys()].map((guessNumber) => {
            let isPreviousGuess = true
            let rowWord: string[] = []
            if (previousGuesses.length > guessNumber) {
              rowWord = previousGuesses[guessNumber]
            } else {
              isPreviousGuess = false
            }
            if (guessNumber === currentGuessNumber) {
              rowWord = currentWordGuess
            }

            const getLetterStyles = (
              guess: string[],
              secretWord: string[],
              wordLength: number,
              isPreviousGuess: boolean
            ): string[] => {
              const correct = colours.letterBackground.correct
              const misplaced = colours.letterBackground.misplaced
              const missed = colours.letterBackground.missed
              const unknown = colours.letterBackground.unknown
              const styles = Array(wordLength).fill(unknown)
              if (!isPreviousGuess) {
                return styles
              }
              const hitCounts: { [key: string]: number } = {}
              for (const letter of guess) {
                const count = secretWord.filter(
                  (secretLetter) => secretLetter == letter
                ).length
                hitCounts[letter] = count
              }
              guess.forEach((letter, index) => {
                if (letter === secretWord[index]) {
                  styles[index] = correct
                  hitCounts[letter] -= 1
                  if (keyBoardLetterStatus[letter] !== letterStatus.correct) {
                    setKeyBoardLetterStatus({
                      ...keyBoardLetterStatus,
                      ...{ [letter]: letterStatus.correct },
                    })
                  }
                }
              })
              guess.forEach((letter, index) => {
                if (styles[index] === unknown && hitCounts[letter] > 0) {
                  styles[index] = misplaced
                  hitCounts[letter] -= 1
                  if (
                    keyBoardLetterStatus[letter] !== letterStatus.correct &&
                    keyBoardLetterStatus[letter] !== letterStatus.misplaced
                  ) {
                    setKeyBoardLetterStatus({
                      ...keyBoardLetterStatus,
                      ...{ [letter]: letterStatus.misplaced },
                    })
                  }
                } else if (styles[index] === unknown) {
                  styles[index] = missed
                  if (
                    keyBoardLetterStatus[letter] !== letterStatus.correct &&
                    keyBoardLetterStatus[letter] !== letterStatus.misplaced &&
                    keyBoardLetterStatus[letter] !== letterStatus.missed
                  ) {
                    setKeyBoardLetterStatus({
                      ...keyBoardLetterStatus,
                      ...{ [letter]: letterStatus.missed },
                    })
                  }
                }
              })
              return styles
            }
            const letterStyles: string[] = getLetterStyles(
              rowWord,
              secretWord,
              wordLength,
              isPreviousGuess
            )

            return (
              <WordRow key={guessNumber}>
                {[...Array(wordLength).keys()].map((letterPosition) => {
                  let letter = ''
                  if (rowWord.length > letterPosition) {
                    letter = rowWord[letterPosition]
                  }
                  return (
                    <SingleLetterInput
                      key={letterPosition}
                      letter={letter}
                      isPreviousGuess={isPreviousGuess}
                      letterStyle={letterStyles[letterPosition]}
                    />
                  )
                })}
              </WordRow>
            )
          })}
        </Box>
        <KeyboardDisplay
          letterStatus={letterStatus}
          keyBoardLetterStatus={keyBoardLetterStatus}
          handleKeyboardInput={handleKeyboardInput}
        />
      </Stack>
    </SiteLayout>
  )
}

export default Home
