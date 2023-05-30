import { create } from "zustand";


interface State {
    theme: "light" | "dark";
}

interface Actions {
    toggleTheme: () => void;
}

export const useTheme = create<State&Actions>((set,get) => ({
    theme: 'light',
    toggleTheme: () => set(state => ({theme: state.theme === 'light'? 'dark' : 'light'}))
}))