import { Count } from '../../assets/styles/timer.styles';

type TimerCountType = {
    seconds: number;
    minutes: number;
};
function TimerCount({ seconds, minutes }: TimerCountType) {
    return (
        <Count>
            {minutes}:{seconds}
        </Count>
    );
}

export default TimerCount;