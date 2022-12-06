import React, { useState, useRef, useEffect } from 'react'

const Second = () => {

    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const TimeLeft = (e) => {

        const total = Date.parse(e) - Date.parse(new Date());
        const secs = Math.floor((total / 1000) % 60);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);

        return {
            total, hours, mins, secs
        };
    }

    const startTimer = (e) => {
        let { total, hours, mins, secs }
            = TimeLeft(e);

        if (total >= 0) {

            setTimer(

                (hours > 9 ? hours : '0' + hours) + ':' +
                (mins > 9 ? mins : '0' + mins) + ':' +
                (secs > 9 ? secs : '0' + secs)

            )
        }

    }
    
    const clearTimer = (e) => {
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {

            startTimer(e);
        }, 1000)

        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setHours(deadline.getHours() + 60);

        return deadline;
    }

    useEffect(() => {

        clearTimer(getDeadTime());

    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <>
            <h2>{timer}</h2>
            <button onClick={onClickReset}>Reset</button>
        </>
    )
}

export default Second;