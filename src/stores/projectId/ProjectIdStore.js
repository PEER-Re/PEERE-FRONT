import { create } from "zustand";
import { persist } from "zustand/middleware";

const ProjectIdStore = create(
  persist(
    (set) => ({
      projectIds: [],
      selectedId: 0,

      // api를 통한 프로젝트 id 세팅
      addProjectId: (newProjectId) =>
        set((state) => ({
          projectIds: [...state.projectIds, newProjectId],
        })),

        // 선택한 프로젝트 id 세팅
      setSelectedId: (id) => set({ selectedId: id }),

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
