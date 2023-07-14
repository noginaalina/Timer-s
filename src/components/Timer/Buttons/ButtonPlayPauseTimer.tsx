import { Button } from '../../../assets/styles/timer.styles';
import {memo} from 'react';
type ButtonType = {
    playTimer: boolean;
    onClick?: () => void,
};
function ButtonPlayPauseTimer({ playTimer, onClick}: ButtonType) {
    return (
        <div>
            <Button onClick={onClick}> {playTimer ? 'Pause' : 'Play'} </Button>
        </div>
    );
}
export default memo(ButtonPlayPauseTimer);