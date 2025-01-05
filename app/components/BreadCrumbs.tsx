"use client";

import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";

const BreadCrumbs = ({routes}: {routes: string[]}) => {
  return (
    <Breadcrumbs color="primary" size="lg" className="py-4 ">
      {routes.map((r) => (
        <BreadcrumbItem
          isDisabled={r == "Product"}
          href={`${r.toLowerCase() == "home" ? "/" : `/${r.toLowerCase()}`}`}
          key={r}
        >
          {r}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
