'use client'


interface Props {
  callback: () => void;
  showPassword: boolean
}

export const PasswordIcon = ({callback, showPassword}:Props ) => {


  return (
    <button
      type="button"
      onClick={callback}
      className="absolute p-2 group pr-4 end-0 rounded-e-md"
    >
      <svg
        className="flex-shrink-0 size-3.5 text-zinc-400 group-hover:text-zinc-500 transition-all"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {showPassword ? (
          <>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </>
        ) : (
          <>
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
            <line x1="2" x2="22" y1="2" y2="22"></line>
          </>
        )}
      </svg>
    </button>
  )
}