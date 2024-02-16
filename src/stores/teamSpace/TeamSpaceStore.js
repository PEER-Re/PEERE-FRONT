import { create } from "zustand";
import { persist } from "zustand/middleware";

const TeamSpaceStore = create(
  persist(
    (set) => ({
      teamspaceIds: [],
      selectedTSId: 0,
      selectedTSName: '',

      // api를 통한 프로젝트 id 세팅
      addTeamSpaceId: (newteamspaceId) =>
        set((state) => ({
          teamspaceIds: [...state.teamspaceIds, newteamspaceId],
        })),

        // 선택한 프로젝트 id 세팅
      setSelectedTSId: (id) => set({ selectedTSId: id }),
      setSelectedTSName: (name) => set({ selectedTSName: name }),

      // 특정 인덱스의 프로젝트 ID를 제거하는 액션
      // removeProjectId: (index) =>
      //   set((state) => ({
      //     projectIds: state.projectIds.filter((_, i) => i !== index),
      //   })),
    }),
    {
      name: "teamspaceIdStorage",
    }
  )
);

export default TeamSpaceStore;