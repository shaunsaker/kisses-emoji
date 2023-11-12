import { ClipboardDocumentIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button, ParagraphText, TitleText } from 'components'
import React, { ComponentPropsWithoutRef } from 'react'
import toast from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'

import { useSelectedEmojis } from '@/emojis/hooks/useSelectedEmojis'

import { EmojiButton } from '../emojiButton/EmojiButton'

type Props = ComponentPropsWithoutRef<'div'>

export const SelectedEmojiRenderer = ({ className = '', ...props }: Props) => {
  const [selectedEmojis, setSelectedEmojis] = useSelectedEmojis()

  const actionsDisabled = !selectedEmojis.length

  return (
    <div className={twMerge('flex flex-col gap-y-8', className)} {...props}>
      <div className="flex justify-end gap-x-4">
        <Button
          className="h-10 w-10 rounded-full p-0"
          variant="secondary"
          disabled={actionsDisabled}
          onClick={() => {
            navigator.clipboard.writeText(selectedEmojis.join(''))
            toast.success('Copied to clipboard')
          }}
        >
          <ClipboardDocumentIcon className="h-5 w-5" />
        </Button>

        <Button className="h-10 w-10 rounded-full p-0" disabled={actionsDisabled} onClick={() => setSelectedEmojis([])}>
          <XMarkIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex h-full flex-wrap justify-center overflow-y-auto">
        {!selectedEmojis.length && (
          <div className="flex flex-col gap-y-4 text-center">
            <TitleText>Hey Lala and friends 👋🏻</TitleText>

            <ParagraphText>Click on an emoji to get started 🤠</ParagraphText>
          </div>
        )}

        {selectedEmojis.map((emoji, index) => (
          <EmojiButton
            key={index}
            onClick={() => setSelectedEmojis(prev => prev.filter((_, prevIndex) => prevIndex !== index))}
          >
            {emoji}
          </EmojiButton>
        ))}
      </div>
    </div>
  )
}
