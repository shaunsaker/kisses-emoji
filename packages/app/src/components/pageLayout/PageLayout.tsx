import { ComponentPropsWithoutRef } from 'react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentPropsWithoutRef<'div'>

export const PageLayout = ({ className = '', ...props }: Props) => {
  return (
    <div
      className={twMerge(
        'bg-theme-background dark:bg-dark-theme-background h-full overflow-y-auto pt-6 lg:pt-8',
        className,
      )}
      {...props}
    />
  )
}
