import React from 'react'

import { Header } from '@/components/header/Header'
import { EmojiPicker } from '@/pages/dashboard/components/emojiPicker/EmojiPicker'

import { SelectedEmojiRenderer } from './components/selectedEmojiRenderer/SelectedEmojiRenderer'

export const Dashboard = () => {
  return (
    <>
      <Header />

      <SelectedEmojiRenderer />

      <EmojiPicker />
    </>
  )
}
