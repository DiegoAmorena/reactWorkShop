import { ChangeEventHandler } from 'react'

export const TextField = ({ content, placeholder, onHandleKey }: {
  content: string,
  placeholder: string,
  onHandleKey: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <input
      type="text"
      onChange={onHandleKey}
      value={content}
      placeholder={placeholder}
    />
  )
}

