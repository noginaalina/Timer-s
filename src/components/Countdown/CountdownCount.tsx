import { memo } from "react";
import { Count } from "../../assets/styles/timer.styles";

type CountType = {
    secondsCountdown: number;
    minutesCountdown: number;
};
function CountdownCount({ secondsCountdown, minutesCountdown }: CountType) {
    return (
        <Count>
            {minutesCountdown}:{secondsCountdown}
        </Count>
    );
}
export default memo(CountdownCount);