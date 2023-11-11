import { XMarkIcon } from '@heroicons/react/24/solid'
import { Button, Card } from 'components'
import React from 'react'

import { useSelectedEmojis } from '@/emojis/hooks/useSelectedEmojis'

import { EmojiButton } from '../emojiButton/EmojiButton'

export const SelectedEmojiRenderer = () => {
  const [selectedEmojis, setSelectedEmojis] = useSelectedEmojis()

  return (
    <div className="m-8 h-full overflow-hidden">
      <Card className="flex h-full flex-col gap-y-4">
        <div className="flex justify-end">
          <Button className="h-10 w-10 rounded-full p-0" onClick={() => setSelectedEmojis([])}>
            <XMarkIcon className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center overflow-y-auto">
          {selectedEmojis.map((emoji, index) => (
            <EmojiButton
              key={index}
              onClick={() => setSelectedEmojis(prev => prev.filter((_, prevIndex) => prevIndex !== index))}
            >
              {emoji}
            </EmojiButton>
          ))}
        </div>
      </Card>
    </div>
  )
}
