import { useEffect } from 'react'

export default function useLockBodyScroll(lock: boolean): void {
  useEffect(() => {
    document.querySelector('body').style.overflow = lock ? 'hidden' : 'auto'
  }, [lock])
}
