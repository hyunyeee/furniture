export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-sm text-gray-600">
      <div className="flex max-w-7xl justify-center gap-20 px-4">
        <div className="flex flex-col items-start gap-2">
          <p>
            <strong>상호명</strong> : 대명
          </p>
          <p>
            <strong>대표자명</strong> : 오상호
          </p>
          <p>
            <strong>사업자등록번호</strong> : 143-01-26492
          </p>
          <p>
            <strong>사업장 주소</strong> : 경기도 화성시 장안면 돌서지길 132-46,
            B동
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>
            <strong>TEL</strong>: 031)358-4826
          </p>
          <p>
            <strong>FAX</strong>: 031)358-4844
          </p>
          <p>
            <strong>연락처</strong> : 010-9249-4449
          </p>
          <p>
            <strong>이메일</strong>: 01092494449@hanmail.net
          </p>
        </div>
      </div>
    </footer>
  );
}
