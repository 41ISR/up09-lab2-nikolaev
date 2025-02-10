import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUserStore {
  userId: string,
  setUserId: (id: string) => void
}



export const UserStore = create<IUserStore>()(
  persist(
    (set) => ({
      userId: "",
      setUserId: (id) => set({
        userId: id
      })
    }),
    {
      name: 'id',
    },
  ),
)
