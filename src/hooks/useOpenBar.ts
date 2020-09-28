import { useState } from 'react'

export default function useOpenBar() {
  const [open, setOpen] = useState('')

  function openAppBar(arg: string) {
    if (arg === open) {
      setOpen('')
    } else {
      setOpen(arg)
    }
  }

  function closeBar() {
    setOpen('')
  }

  return { open, openAppBar, closeBar }
}
