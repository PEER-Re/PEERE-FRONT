import { create } from "zustand";
import { persist } from "zustand/middleware";

const UsersStore = create(
  persist(
    (set) => ({
      teamUsers: [],
      userId: 0,
      userName: '',
      userProfileImage: '',

      // team에 user 추가
      addTeamUser: (newUser) =>
        set((state) => ({
            teamusers: [...state.teamUsers, newUser],
        })),

        // getUser
      setUserId: (id) => set({ userId: id }),
      setUserName: (name) => set({ userName: name }),
      setUserProfileImage: (image_url) => set({ userProfileImage: image_url }),

    }),
    {
      name: "usersStorage",
    }
  )
);

export default UsersStore;