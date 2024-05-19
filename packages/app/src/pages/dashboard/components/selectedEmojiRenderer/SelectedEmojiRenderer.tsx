import { ClipboardDocumentIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button, ParagraphText, TitleText } from 'components'
import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'

import { useSelectedEmojis } from '@/emojis/hooks/useSelectedEmojis'

import { EmojiButton } from '../emojiButton/EmojiButton'

type Props = ComponentPropsWithoutRef<'div'>

export const SelectedEmojiRenderer = ({ className = '', ...props }: Props) => {
  const selectedEmojisListRef = useRef<HTMLDivElement>(null)

  const [selectedEmojis, setSelectedEmojis] = useSelectedEmojis()

  const actionsDisabled = !selectedEmojis.length

  // when the selected emojis change, scroll to the end of the list
  useEffect(() => {
    selectedEmojisListRef.current?.scrollTo({
      top: selectedEmojisListRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [selectedEmojis])

  return (
    <div className={twMerge('flex flex-1 flex-col gap-y-4 overflow-hidden', className)} {...props}>
      <div className="flex justify-end gap-x-4 px-8">
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

      <div ref={selectedEmojisListRef} className="flex flex-1 flex-wrap justify-center overflow-y-auto">
        {!selectedEmojis.length ? (
          <div className="flex max-w-md flex-col gap-y-4 text-center">
            <TitleText>Hey Lala and friends!</TitleText>

            <ParagraphText>
              Welcome to Kisses Emoji where you can learn how to move the cursor, scroll, click and clear with this fun
              emoji game. Click on an emoji to get started 🤠
            </ParagraphText>
          </div>
        ) : (
          selectedEmojis.map((emoji, index) => (
            <EmojiButton
              key={index}
              onClick={() => setSelectedEmojis(prev => prev.filter((_, prevIndex) => prevIndex !== index))}
              style={{
                // triggers hardware acceleration necessary to fix rendering issues when scrolling quickly
                transform: 'translateZ(0)',
              }}
            >
              {emoji}
            </EmojiButton>
          ))
        )}
      </div>
    </div>
  )
}
