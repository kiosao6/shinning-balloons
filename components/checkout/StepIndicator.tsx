

interface Props {
  step: number;
}

export const StepIndicator = ({step}: Props) => {
  return (
    <p className="hidden border rounded-full min-w-6 text-sm font-bold max-h-6 lg:flex justify-center items-center">{step}</p>
  )
}