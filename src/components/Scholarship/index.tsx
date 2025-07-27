import SectionTitle from "../SectionTitle";
import ScholarshipItem from "./Scholarship";

import { DataProps } from "@/types";

const Scholarship = ({ scholarship }: Pick<DataProps, "scholarship">) => {
  return (
    <div>
      <SectionTitle>Scholarship</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...scholarship].reverse().map((scholarship) => (
          <ScholarshipItem key={scholarship.id} {...scholarship} />
        ))}
      </div>
    </div>
  );
};

export default Scholarship;
