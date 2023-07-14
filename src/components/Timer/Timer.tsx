import { TimerStyles } from '../../assets/styles/timer.styles';
import ButtonTimerGroup from './Buttons/ButtonTimerGroup';
import HelpersTimer from './HelpersTimer';
import TimerCount from './TimerCount';
import Titles from './Title';

function Timer() {
    const { secondsTimer, minutesTimer, handlePlayTimer, handleResetTimer, playTimer } = HelpersTimer();

    return (
        <TimerStyles>
            <Titles title='Timer' />
            <TimerCount minutes={minutesTimer} seconds={secondsTimer} />
            <ButtonTimerGroup handlePlayTimer={handlePlayTimer} handleResetTimer={handleResetTimer} playTimer={playTimer} />
        </TimerStyles>
    );
}

export default Timer;
