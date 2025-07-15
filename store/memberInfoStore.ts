import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MemberInfoState {
  memberNickName: string;
  checkCorporation: boolean;
  setMemberNickName: (nickname: string) => void;
  setCheckCorporation: (checked: boolean) => void;
}

const useMemberInfoStore = create<MemberInfoState>()(
  persist(
    (set) => ({
      memberNickName: "",
      checkCorporation: false,
      setMemberNickName: (nickname: string) =>
        set({ memberNickName: nickname }),
      setCheckCorporation: (checked: boolean) =>
        set({ checkCorporation: checked }),
    }),
    {
      name: "member-info",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useMemberInfoStore;
