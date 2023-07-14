import { useCallback, useEffect, useState } from 'react';

function HelpersTimer() {
    const [playTimer, setPlayTimer] = useState<boolean>(false);

    const [secondsTimer, setSecondsTimer] = useState<number>(0);
    const [minutesTimer, setMinutesTimer] = useState<number>(0);

    const handlePlayTimer = useCallback(() => {
        setPlayTimer(!playTimer);
    }, [playTimer]);

    const handleResetTimer = useCallback(() => {
        setSecondsTimer(0);
        setMinutesTimer(0);
    }, [setSecondsTimer, setMinutesTimer]);

    useEffect(() => {
        if (playTimer) {
            const timer = setInterval(() => {
                setSecondsTimer(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutesTimer(prevMinutes => prevMinutes + 1);
                        return 0;
                    }
                    return prevSeconds + 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [playTimer]);

    return { handlePlayTimer, handleResetTimer, secondsTimer, minutesTimer, playTimer };
}
export default HelpersTimer;
