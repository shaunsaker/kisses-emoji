import { Button } from 'components'
import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'button'>

export const EmojiButton = ({ className = '', children, ...props }: Props) => {
  return (
    <Button className={twMerge('h-20 w-20 bg-white p-0 text-5xl hover:scale-90', className)} variant="light" {...props}>
      {children}
    </Button>
  )
}
