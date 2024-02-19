import { create } from "zustand";
import { persist } from "zustand/middleware";

const FeedbacksStore = create(
  persist(
    (set) => ({
        selectedUser: 0,

        // 선택한 user
      setSelectedUser: (id) => set({ selectedUser: id }),
    }),
    {
      name: "feedbacksStorage",
    }
  )
);

export default FeedbacksStore;
