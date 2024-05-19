import { Card } from 'components'
import React, { ComponentPropsWithoutRef, forwardRef, useCallback } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'
import { twMerge } from 'tailwind-merge'

import { useSelectedEmojis } from '@/emojis/hooks/useSelectedEmojis'

import emojis from '../../../../emojis/fixtures/emojis.json'
import { EmojiButton } from '../emojiButton/EmojiButton'

type Props = ComponentPropsWithoutRef<'div'>

export const EmojiPicker = ({ className = '' }: Props) => {
  const [_, setSelectedEmojis] = useSelectedEmojis()

  const onEmojiClick = useCallback(
    (emoji: string) => {
      setSelectedEmojis(prev => prev.concat(emoji))
    },
    [setSelectedEmojis],
  )

  return (
    <div className={twMerge('', className)}>
      <Card className="h-full p-0">
        <VirtuosoGrid
          totalCount={emojis.emojis.length}
          itemContent={index => (
            <EmojiButton
              onClick={() => onEmojiClick(emojis.emojis[index])}
              style={{
                // triggers hardware acceleration necessary to fix rendering issues when scrolling quickly
                transform: 'translateZ(0)',
              }}
            >
              {emojis.emojis[index]}
            </EmojiButton>
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
      </Card>
    </div>
  )
}
