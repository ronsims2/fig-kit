import React, { forwardRef } from 'react'

export type InputProps = {
  placeholder: string
  defaultValue: string
  name: string
  className: string
}

function _Input(props: InputProps, ref: React.Ref<unknown>) {
  const { placeholder, defaultValue, name, className } = props
  return (
    <input
      className={`fk-input ${className}`}
      ref={ref}
      name={name}
      placeholder={placeholder}
      value={defaultValue}
    />
  )
}

export const Input = forwardRef(_Input)
