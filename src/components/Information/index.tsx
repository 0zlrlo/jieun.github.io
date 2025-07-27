import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        {/* 이미지 + 인삿말을 감싸는 컨테이너 */}
        <div className="flex items-center gap-4">
          {/* 왼쪽 이미지 */}
          <img
            src="./profile.png"
            alt="프로필 이미지"
            className="h-40 w-auto object-contain rounded-xl shadow-md"
          />
          {/* 오른쪽 텍스트 */}
          <h1 className="leading-[1.15] ml-2">
            안녕하세요,
            <br />
            백엔드 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
        </div>

        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
