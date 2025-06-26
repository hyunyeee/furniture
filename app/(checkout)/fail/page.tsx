import { Suspense } from "react";
import FailPage from "@/app/(checkout)/fail/FailPage";

export default function Page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <FailPage />
    </Suspense>
  );
}
