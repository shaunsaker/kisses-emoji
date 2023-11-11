import { Button } from 'components'
import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'button'>

export const EmojiButton = ({ className = '', children, ...props }: Props) => {
  return (
    <Button
      className={twMerge('h-16 w-16 bg-white p-0 text-3xl hover:scale-90 lg:h-20 lg:w-20 lg:text-5xl', className)}
      variant="light"
      {...props}
    >
      {children}
    </Button>
  )
}
