"use client";
import ProductCard from "@/app/components/ProductCard";
import {data} from "@/app/constants";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Slider,
} from "@nextui-org/react";
import {SlidersHorizontal} from "lucide-react";
import {useState} from "react";

const CollectionsPage = () => {
  const [selected, setSelected] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);

  return (
    <div className="wrapper py-6 md:flex gap-4 px-4 lg:px-0 relative">
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger className="md:hidden mb-4">
          <Button isIconOnly variant="faded" color="primary">
            <SlidersHorizontal className="text-black/40" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-6 w-80 h-full top-6  p-4">
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
            <Button color="primary" className="w-full">
              Apply Filter
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <div className="hidden md:flex flex-col gap-6 w-80 h-full sticky top-6 p-4 rounded-xl border ">
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
        <Button color="primary" className="w-full">
          Apply Filter
        </Button>
      </div>

      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
