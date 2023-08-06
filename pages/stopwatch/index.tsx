"use client"
import { useState, useEffect, useRef } from "react"
const StopWatch = () => {
    const isRef = useRef(null);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    console.log(isRunning, "hdjeu");

    console.log(isRef.current, "refs")



    useEffect(() => {
        let timer: any;
        if (isRunning) {

            timer = setInterval(() => {
                setTime((times) => times + 1);
            }, 1000)
        }

        return () => {
            clearInterval(timer);
        }
    }, [isRunning])


    const handleStart = () => {
        setIsRunning(true)
    }

    const stopTimer = () => {
        setIsRunning(false);
        // setTime(0);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    }


    return (
        <section className="flex items-center justify-center flex-col w-full min-h-screen">
            <h3>My stop watch app</h3>
            <div className="flex items-center justify-center flex-col">
                <h3 className="text-[40px] font-bold" ref={isRef}>{time}</h3>

                <div className="flex items-center justify-center gap-4">
                    <button onClick={handleStart} className="p-3 rounded bg-[green] text-white  border-[gray]">Start Time</button>
                    <button onClick={stopTimer} className="p-3 rounded border border-[gray]">Pause</button>

                    <button onClick={handleReset} className="p-3 rounded bg-[red] ">Reset</button>
                </div>
            </div>
        </section>
    )
}
export default StopWatch;