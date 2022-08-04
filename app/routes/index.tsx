import type { LoaderFunction } from '@remix-run/node'
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from 'react';
import API from "~/api";

type Slip = {
  id: number;
  advice: string;
}

type LoaderData = {
  slip: Slip;
}

export const loader: LoaderFunction = async () => {
  const slip = await API.getAdvice()

  return json<LoaderData>({ slip })
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
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {slip.advice}
      </h1>

      <button disabled={isLoading} onClick={getNewAdvice}>Generate</button>
    </div>
  )
}
