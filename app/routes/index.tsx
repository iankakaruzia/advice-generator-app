import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import API from '~/api'

type Slip = {
  id: number
  advice: string
}

type LoaderData = {
  slip: Slip
}

export const loader: LoaderFunction = async () => {
  const slip = await API.getAdvice()

  return json<LoaderData>({ slip })
}

function Divider() {
  return (
    <div className='mb-8 flex w-full items-center justify-center self-center'>
      <div className='block h-4 w-full max-w-[295px] bg-divider-mobile bg-contain bg-no-repeat lg:hidden' />
      <div className='hidden h-4 w-full max-w-[444px] bg-divider-desktop bg-contain bg-no-repeat lg:block' />
    </div>
  )
}

export default function Index() {
  const { slip: loaderSlip } = useLoaderData<LoaderData>()
  const [slip, setSlip] = useState(loaderSlip)
  const [isLoading, setIsLoading] = useState(false)

  async function getNewAdvice() {
    setIsLoading(true)
    try {
      const slip = await API.getAdvice()
      setSlip(slip)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex h-full w-full flex-col items-center justify-center bg-gray-700 px-4'>
      <main className='relative flex max-w-[540px] flex-col rounded-xl bg-gray-500 px-6 pb-8 pt-10'>
        <span className='text-center text-[11px] leading-[15px] tracking-[3.45714px] text-green-500'>
          ADVICE #{slip.id}
        </span>
        <h1 className='my-6 text-center text-2xl leading-[33px] tracking-[-0.257143px] text-green-100'>
          {slip.advice}
        </h1>

        <Divider />

        <button
          className='absolute left-1/2 bottom-0 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-green-500 transition-all hover:shadow-lg disabled:bg-opacity-80'
          disabled={isLoading}
          onClick={getNewAdvice}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path
              fill='#202733'
              d='M20 0H4a4.005 4.005 0 00-4 4v16a4.005 4.005 0 004 4h16a4.005 4.005 0 004-4V4a4.005 4.005 0 00-4-4zM7.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'
            ></path>
          </svg>
        </button>
      </main>
    </div>
  )
}
