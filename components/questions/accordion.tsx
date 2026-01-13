import { ChevronUp, ChevronDown } from 'lucide-react'

type AccordionProps = {
  id: number
  question: string
  answer: string
  isOpen: boolean
  onToggle: (id: number) => void
}

export default function Accordion({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div className='rounded-3xl border border-gray-500 px-4'>
      <button
        onClick={() => onToggle(id)}
        className='flex justify-between items-center w-full text-left p-4'
      >
        {question} {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className='p-4'>{answer}</div>
      </div>
    </div>
  )
}
