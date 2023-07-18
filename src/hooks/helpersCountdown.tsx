import { ChangeEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';

const useHelpersCountdown = () => {
    const [playCountdown, setPlayCountdown] = useState<boolean>(false);
    const [minutesCountdown, setMinutesCountdown] = useState<number>(0);
    const [secondsCountdown, setSecondsCountdown] = useState<number>(0);

    const [inputMinutes, setInputMinutes] = useState<number>(0);
    const [inputSeconds, setInputSeconds] = useState<number>(0);

    const handleResetMinutes = () => {
        setMinutesCountdown(0);
        setInputMinutes(0);
    };

    const handleResetSeconds = () => {
        setSecondsCountdown(0);
        setInputSeconds(0);
    };

    const handleResetCountdown = useCallback(() => {
        handleResetMinutes();
        handleResetSeconds();
    }, [playCountdown]);

    const handlePlayCountdown = useCallback(() => {
        setPlayCountdown(!playCountdown);
    }, [playCountdown]);

    const handleChangeMinutes = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(event.currentTarget.value);
            setInputMinutes(value);
            setMinutesCountdown(value);
        },
        [minutesCountdown]
    );

    const handleChangeSeconds = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(event.currentTarget.value);
            setInputSeconds(value);
            setSecondsCountdown(value);
        },
        [secondsCountdown]
    );


    useEffect(() => {
        if (playCountdown && (minutesCountdown > 0 || secondsCountdown > 0)) {
            const timerCountdown = setInterval(() => {
                if (secondsCountdown > 0) {
                    setSecondsCountdown(prevSec => prevSec - 1);
                } else if (minutesCountdown > 0) {
                    setMinutesCountdown(prevMin => prevMin - 1);
                    setSecondsCountdown(59);
                }
            }, 1000);

            if (minutesCountdown === 0 && secondsCountdown === 0) {
                clearInterval(timerCountdown);
            }
            return () => clearInterval(timerCountdown);
        }
    }, [playCountdown, minutesCountdown, secondsCountdown]);
    return {
        handlePlayCountdown,
        handleResetCountdown,
        secondsCountdown,
        minutesCountdown,
        playCountdown,
        handleChangeMinutes,
        handleChangeSeconds,
        inputMinutes,
        inputSeconds,
    };
};

export default useHelpersCountdown;