"use client";

import { Category } from "@/utils/Category";
import Container from "../Container";
import CategoryQuery from "./CategoryQuery";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathname = usePathname();
  const isMinPage = pathname === "/";
  if (!isMinPage) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
          {Category.map((item) => (
            <CategoryQuery
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={
                category === item.label ||
                (category === null && item.label === "All")
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
