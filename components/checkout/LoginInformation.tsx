import { CheckIcon, StepIndicator } from "@/components/index"


interface Props {
  name: string;
  email: string;
}
export const LoginInformation = ({
  name, email
}:Props) => {
  
  return (
    <div className="border border-zinc-300 p-6 rounded-xl">
      <div className="flex gap-8">
        <StepIndicator step={1} />
        <div className="flex flex-col gap-1">
          <div className="flex gap-3 items-center mb-1">
            <span className="uppercase text-base font-medium">Login</span>
            <CheckIcon />
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