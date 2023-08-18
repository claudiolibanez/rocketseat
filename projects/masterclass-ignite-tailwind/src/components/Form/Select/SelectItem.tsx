'use client'

import { CheckCheck } from 'lucide-react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ComponentProps } from 'react'

type SelectItemProps = ComponentProps<typeof SelectPrimitive.SelectItem> & {
  text: string
}

export function SelectItem({ text, ...rest }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className="flex items-center gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...rest}
    >
      <SelectPrimitive.ItemText className="text-black">
        {text}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <CheckCheck className="h-4 w-4 text-violet-500" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
