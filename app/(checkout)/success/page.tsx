import { Suspense } from "react";
import SuccessPage from "./SuccessPage";

export default function Page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <SuccessPage />
    </Suspense>
  );
}
