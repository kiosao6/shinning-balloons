



import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

interface State {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useStore = create<State>()(devtools((set) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }))
    document.body.classList.toggle('overflow-hidden');
    document.querySelector('main')?.classList.toggle('opacity-0');
    document.querySelector('footer')?.classList.toggle('opacity-0');
  } 
})))