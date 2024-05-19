import React from 'react'

import { Header } from '@/components/header/Header'
import { PageLayout } from '@/components/pageLayout/PageLayout'
import { EmojiPicker } from '@/pages/dashboard/components/emojiPicker/EmojiPicker'

import { SelectedEmojiRenderer } from './components/selectedEmojiRenderer/SelectedEmojiRenderer'

export const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="flex h-full flex-col">
        <PageLayout className="flex flex-1 flex-col overflow-hidden">
          <SelectedEmojiRenderer />
        </PageLayout>

        <EmojiPicker className="flex-[2]" />
      </div>
    </>
  )
}
