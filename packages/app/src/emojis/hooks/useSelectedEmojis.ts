import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const atom = atomWithStorage<string[]>('selectedEmojis', [])

export const useSelectedEmojis = () => useAtom(atom)
