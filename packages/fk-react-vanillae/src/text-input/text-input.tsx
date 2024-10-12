import React, { forwardRef, LegacyRef } from 'react'

import './text-input.css'

export type TextInputProps = {
  placeholder: string
  defaultValue: string
  name: string
  className: string
}

function _TextInput(
  props: TextInputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) {
  const { placeholder, defaultValue, name, className } = props
  return (
    <input
      className={`fk-input ${className ?? ''}`}
      ref={ref}
      name={name}
      placeholder={placeholder}
      value={defaultValue}
    />
  )
}

export const TextInput = forwardRef(_TextInput)
