import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} className={twMerge('', props.className)} />
}
