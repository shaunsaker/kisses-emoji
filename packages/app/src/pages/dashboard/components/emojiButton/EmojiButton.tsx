import { Button } from 'components'
import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'button'>

export const EmojiButton = ({ className = '', children, ...props }: Props) => {
  return (
    <Button
      className={twMerge(
        'hover:bg-theme-brand-muted dark:hover:bg-dark-theme-brand-muted h-16 w-16 p-0 text-3xl lg:h-20 lg:w-20 lg:text-5xl',
        className,
      )}
      variant="light"
      {...props}
    >
      {children}
    </Button>
  )
}
