import { IoCheckmark } from "react-icons/io5";

export const MiniList = () => {
  return (
    <ul className="hidden mb-14 md:flex md:flex-col gap-y-2">
      <li className="flex items-center gap-x-4 mx-auto lg:mx-0">
        <IoCheckmark className="text-green-600" />
        <p className="text-base text-base-heading/70 leading-relaxed">High-quality balloons in various shapes, sizes, and colors</p>
      </li>
      <li className="flex items-center gap-x-4 mx-auto lg:mx-0">
        <IoCheckmark className="text-green-600" />
        <p className="text-base text-base-heading/70 leading-relaxed">Reliable shipping options, including express.</p>
      </li>
      <li className="flex items-center gap-x-4 mx-auto lg:mx-0">
        <IoCheckmark className="text-green-600" />
        <p className="text-base text-base-heading/70 leading-relaxed">Curated selection of premium balloons for every occasion</p>
      </li>
    </ul>
  )
}