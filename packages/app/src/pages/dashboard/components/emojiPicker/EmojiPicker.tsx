import React, { ComponentPropsWithoutRef, forwardRef, useCallback } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'
import { twMerge } from 'tailwind-merge'

import { useSelectedEmojis } from '@/emojis/hooks/useSelectedEmojis'

import emojis from '../../../../emojis/fixtures/emojis.json'
import { EmojiButton } from '../emojiButton/EmojiButton'

export const EmojiPicker = () => {
  const [_, setSelectedEmojis] = useSelectedEmojis()

  const onEmojiClick = useCallback(
    (emoji: string) => {
      setSelectedEmojis(prev => prev.concat(emoji))
    },
    [setSelectedEmojis],
  )

  return (
    <VirtuosoGrid
      className="border-theme-border dark:border-dark-theme-border h-full border-t"
      totalCount={emojis.emojis.length}
      itemContent={index => (
        <EmojiButton onClick={() => onEmojiClick(emojis.emojis[index])}>{emojis.emojis[index]}</EmojiButton>
      )}
      components={{
        List: forwardRef(({ className = '', ...props }: ComponentPropsWithoutRef<'div'>, ref) => (
          <div ref={ref} {...props} className={twMerge('flex flex-wrap justify-center', className)} />
        )),
        Item: ({ className = '', ...props }: ComponentPropsWithoutRef<'div'>) => (
          <div {...props} className={twMerge('', className)} />
        ),
      }}
    />
  )
}
