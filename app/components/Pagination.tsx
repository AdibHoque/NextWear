"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {formUrlQuery} from "@/lib/utils";
import {Button} from "@nextui-org/button";
import {ArrowLeft, ArrowRight} from "lucide-react";

type PaginationProps = {
  page: number | string;
  totalPages: number;
};

export default function Pagination({page, totalPages}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const paginate = (type: "Prev" | "Next") => {
    const pageValue = type === "Next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      updates: {
        page: pageValue.toString(),
      },
    });
    router.push(newUrl, {scroll: false});
  };

  return (
    <div className="flex items-center gap-2 w-full justify-between mt-6 mb-1">
      <Button
        color="primary"
        size="md"
        className="flex"
        onPress={() => paginate("Prev")}
        isDisabled={Number(page) == 1}
      >
        <ArrowLeft />
        Previous
      </Button>
      <p className="opacity-80">
        Page {page} of {totalPages}
      </p>
      <Button
        color="primary"
        size="md"
        className="flex"
        onPress={() => paginate("Next")}
        isDisabled={Number(page) == totalPages}
      >
        Next
        <ArrowRight />
      </Button>
    </div>
  );
}
