"use client";
import {formUrlQuery} from "@/lib/utils";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Slider,
} from "@nextui-org/react";
import {Search, SlidersHorizontal} from "lucide-react";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

const Filter = () => {
  const [selected, setSelected] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const updatedUrl = formUrlQuery({
      params: searchParams.toString(),
      updates: {
        category: selected || undefined,
        type: selectedType || undefined,
        query: query || undefined,
        priceRange:
          priceRange[0] !== 0 || priceRange[1] !== 500
            ? priceRange.join("-")
            : undefined,
      },
    });

    setUrl(updatedUrl);
  }, [selected, selectedType, priceRange, searchParams, query]);

  return (
    <>
      <Popover
        placement="right"
        showArrow={true}
        isOpen={open}
        onOpenChange={(open) => setOpen(open)}
      >
        <PopoverTrigger className="md:hidden mb-4">
          <Button isIconOnly variant="faded" color="primary">
            <SlidersHorizontal className="text-black/40" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-6 w-[70vw] h-full top-6 p-4 md:hidden">
            <Input
              value={query}
              onValueChange={setQuery}
              classNames={{
                base: "w-full h-10 ",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Search"
              size="sm"
              startContent={<Search size={18} />}
              type="search"
            />
            <CheckboxGroup
              color="primary"
              label="Category"
              value={[selected]}
              onValueChange={(value) => setSelected(value[value.length - 1])}
            >
              <Checkbox value="casual">Casual</Checkbox>
              <Checkbox value="formsl">Formal</Checkbox>
              <Checkbox value="party">Party</Checkbox>
              <Checkbox value="gym">Gym</Checkbox>
            </CheckboxGroup>

            <CheckboxGroup
              color="primary"
              label="Type"
              value={[selectedType]}
              onValueChange={(value) =>
                setSelectedType(value[value.length - 1])
              }
            >
              <Checkbox value="topwear">Topwear</Checkbox>
              <Checkbox value="bottomwear">Bottomwear</Checkbox>
            </CheckboxGroup>

            <Slider
              className="w-full"
              defaultValue={[0, 500]}
              formatOptions={{style: "currency", currency: "USD"}}
              label="Price Range"
              showTooltip={true}
              maxValue={500}
              minValue={0}
              step={50}
              value={priceRange}
              onChange={(value) => {
                if (Array.isArray(value)) {
                  setPriceRange(value);
                }
              }}
            />
            <Button
              onPress={() => {
                router.push(url);
                setOpen(false);
              }}
              color="primary"
              className="w-full"
            >
              Apply Filter
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <div className="hidden md:flex flex-col gap-6 w-80 h-full sticky top-6 p-4 rounded-xl border">
        <Input
          value={query}
          onValueChange={setQuery}
          classNames={{
            base: "w-full h-10 ",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search"
          size="sm"
          startContent={<Search size={18} />}
          type="search"
        />
        <CheckboxGroup
          color="primary"
          label="Category"
          value={[selected]}
          onValueChange={(value) => setSelected(value[value.length - 1])}
        >
          <Checkbox value="casual">Casual</Checkbox>
          <Checkbox value="formal">Formal</Checkbox>
          <Checkbox value="party">Party</Checkbox>
          <Checkbox value="gym">Gym</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup
          color="primary"
          label="Type"
          value={[selectedType]}
          onValueChange={(value) => setSelectedType(value[value.length - 1])}
        >
          <Checkbox value="topwear">Topwear</Checkbox>
          <Checkbox value="bottomwear">Bottomwear</Checkbox>
        </CheckboxGroup>

        <Slider
          className="w-full"
          defaultValue={[0, 500]}
          formatOptions={{style: "currency", currency: "USD"}}
          label="Price Range"
          showTooltip={true}
          maxValue={500}
          minValue={0}
          step={50}
          value={priceRange}
          onChange={(value) => {
            if (Array.isArray(value)) {
              setPriceRange(value);
            }
          }}
        />
        <Button
          onPress={() => router.push(url)}
          color="primary"
          className="w-full"
        >
          Apply Filter
        </Button>
      </div>
    </>
  );
};

export default Filter;
