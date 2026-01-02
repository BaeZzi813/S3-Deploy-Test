'use client'

import { ChangeEvent, useState } from "react";
import solarLunar from "solarlunar";

export default function Home() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const getSolarInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const convertSolarToLunar = (date: string) => {
    if(!input) return;
    const [year, month, day] = date.split('-').map(Number)
    const reverted = solarLunar.solar2lunar(year, month, day)

    setResult(`${reverted.lYear}년 ${reverted.lMonth}월 ${reverted.lDay}일`)
  }
  return (
    <>
    <section className="mx-auto w-lg mt-7">
      <div className="flex flex-col justify-center items-center gap-7">
    <div className="text-3xl text-blue-600 font-bold">음력 계산기</div>
    <div className="flex gap-3">
      <span className="font-semibold">양력일 : </span>
      <input type='date' className="font-semibold" value={input} onChange={getSolarInput} />
      </div>
    <button onClick={()=>convertSolarToLunar(input)} className="font-bold cursor-pointer border border-b-blue-950 rounded-xl w-24 bg-blue-400">변환</button>
    <div className="border border-amber-700 rounded-2xl w-3xs h-7 flex justify-center">{result}</div>
    </div>
    </section>
    </>
  );
}
