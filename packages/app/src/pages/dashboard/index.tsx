import React from 'react'

import { Header } from '@/components/header/Header'
import { PageLayout } from '@/components/pageLayout/PageLayout'
import { EmojiPicker } from '@/pages/dashboard/components/emojiPicker/EmojiPicker'

import { SelectedEmojiRenderer } from './components/selectedEmojiRenderer/SelectedEmojiRenderer'

export const Dashboard = () => {
  return (
    <>
      <Header />

      <PageLayout className="flex flex-col">
        <SelectedEmojiRenderer className="mb-8 flex-1" />

        <EmojiPicker className="-mb-8 flex-[2] lg:-mb-12" />
      </PageLayout>
    </>
  )
}
