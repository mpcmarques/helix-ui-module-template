import { create } from "zustand";

interface VisibilityState {
    visible: boolean;
    setVisible: (visibility: boolean) => void;
}

export const useVisibility = create<VisibilityState>((set) => ({
    visible: false,
    setVisible: (visibility: boolean) => set({ visible: visibility }),
}));
