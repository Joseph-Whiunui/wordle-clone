import { Box, Button, Center, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
// import SingleLetterInput from '../SingleLetterInput'
// import { letterStatus } from '../../lib/settings'
// import { letterBackground } from '../../lib/colours'

type SiteLayoutProps = {
  children: any
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Stack bg="gray.900">
      <Center mb={3}>
        {/* <SingleLetterInput letter="J" letterStyle={letterBackground.missed} />
        <SingleLetterInput letter="O" letterStyle={letterBackground.correct} />
        <SingleLetterInput letter="R" letterStyle={letterBackground.correct} />
        <SingleLetterInput letter="D" letterStyle={letterBackground.correct} />
        <SingleLetterInput letter="L" letterStyle={letterBackground.correct} />
        <SingleLetterInput letter="E" letterStyle={letterBackground.correct} /> */}
        Jordle
      </Center>
      {children}
    </Stack>
  )
}

export default SiteLayout
