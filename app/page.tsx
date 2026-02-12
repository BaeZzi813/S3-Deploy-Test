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
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden blur-[60px]" aria-hidden="true">
        <div className="absolute rounded-full w-[700px] h-[700px] -top-[5%] -left-[5%] bg-[radial-gradient(circle,rgba(99,102,241,0.6),transparent_70%)] animate-[float-1_8s_infinite_alternate_ease-in-out]" />
        <div className="absolute rounded-full w-[600px] h-[600px] -bottom-[5%] -right-[5%] bg-[radial-gradient(circle,rgba(139,92,246,0.5),transparent_70%)] animate-[float-2_10s_infinite_alternate_ease-in-out]" />
        <div className="absolute rounded-full w-[550px] h-[550px] top-[35%] left-[25%] bg-[radial-gradient(circle,rgba(14,165,233,0.45),transparent_70%)] animate-[float-3_12s_infinite_alternate_ease-in-out]" />
      </div>
      <main className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-[#1e293b] p-8 shadow-2xl shadow-indigo-500/10">
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full" style={{ boxShadow: '10px -6px 0 0 #6366f1' }} />
          </div>
          <h1 className="text-2xl font-bold text-center text-[#e2e8f0] mb-8">
            음력 계산기
          </h1>
          <label className="block text-sm font-medium text-[#94a3b8] mb-2">
            양력일
          </label>
          <input
            type="date"
            max="9999-12-31"
            value={input}
            onChange={getSolarInput}
            className="w-full bg-[#0b0e17] border border-[#1e293b] rounded-lg px-4 py-3 text-[#e2e8f0] mb-6 transition-all duration-200 focus:border-[#6366f1] focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
          />
          <button
            onClick={() => convertSolarToLunar(input)}
            disabled={!input}
            className="w-full bg-[#6366f1] text-white rounded-lg py-3 font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-[#818cf8] hover:shadow-indigo-500/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mb-6"
          >
            변환
          </button>
          {result && (
            <div
              className="bg-[#0b0e17]/50 rounded-xl border border-[#1e293b] p-5 text-center shadow-inner shadow-indigo-500/5"
              style={{ animation: 'fade-in 0.3s ease-out forwards' }}
            >
              <p className="text-xs font-medium text-[#94a3b8] mb-1">음력 (Lunar)</p>
              <p className="text-xl font-semibold text-[#e2e8f0]">{result}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
