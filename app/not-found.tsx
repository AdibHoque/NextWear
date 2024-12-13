import {Button} from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="/Error.svg"
        alt="error"
        width={500}
        height={500}
        className="bg-contain"
      />
      <Button color="primary" className="px-4 py-2">
        <Link href="/">Back Home</Link>
      </Button>
    </div>
  );
}
