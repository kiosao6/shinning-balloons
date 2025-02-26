import { StepIndicator } from "@/components/index"
import { HiMiniCheckCircle } from "react-icons/hi2";


interface Props {
  name: string;
  email: string;
}
export const LoginInformation = ({
  name, email
}:Props) => {
  
  return (
    <div className="border border-emerald-500 bg-emerald-50 p-6 rounded-xl">
      <div className="flex gap-8">
        <StepIndicator step={1} />
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center mb-1">
            <span className="uppercase text-base font-medium">Login</span>
            <HiMiniCheckCircle className="size-5" color="#2F303C" />
          </div>
          <div className="md:flex items-center font-semibold gap-x-4 max-w-xs [&>*]:text-sm">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}