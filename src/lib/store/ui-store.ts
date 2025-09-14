import { create } from 'zustand';

// Define the shape of the store's state
interface UIState {
  // Placeholder property to avoid empty object type
  _placeholder?: never;
  // Future global UI state can be added here
}

// Create the store
export const useUIStore = create<UIState>(() => ({
  // Initial state for future properties
}));
