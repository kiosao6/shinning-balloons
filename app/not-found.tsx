import { Button } from "@/components/index";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <Image
          src="/404.webp"
          alt="404 image"
          width={600}
          height={600}
          className="px-8"
          priority={true}
          
        />
        <div className="flex flex-col px-8 justify-center items-center">
          <span className="text-4xl lg:text-5xl text-base-heading mb-3 mx-auto font-bold">Woops...</span>
          <p className="mb-10 lg:text-lg text-base-heading/70 text-center mx-auto">
            It seems the page you are looking for does not exist.
          </p>
          <Button className="bg-moon-500 mx-auto block text-base rounded-[0.5rem] text-white hover:bg-moon-600 w-64 p-0 md:mx-auto lg:mx-0" variant="default" size="lg">
            <Link className="w-full h-full flex justify-center items-center" href="/shop">Go back to shop</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}