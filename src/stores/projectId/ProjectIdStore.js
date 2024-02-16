import { create } from "zustand";
import { persist } from "zustand/middleware";

const ProjectIdStore = create(
  persist(
    (set) => ({
      projectIds: [],
      selectedPRId: 0,
      selectedPRName: '',

      // api를 통한 프로젝트 id 세팅
      addProjectId: (newProjectId) =>
        set((state) => ({
          projectIds: [...state.projectIds, newProjectId],
        })),

        // 선택한 프로젝트 id 세팅
      setSelectedPRId: (id) => set({ selectedPRId: id }),
      setSelectedPRName: (name) => set({ selectedPRName: name }),

      // 특정 인덱스의 프로젝트 ID를 제거하는 액션
      // removeProjectId: (index) =>
      //   set((state) => ({
      //     projectIds: state.projectIds.filter((_, i) => i !== index),
      //   })),
    }),
    {
      name: "projectIdStorage",
    }
  )
);

export default ProjectIdStore;
