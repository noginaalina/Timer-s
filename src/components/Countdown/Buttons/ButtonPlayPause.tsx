import { Button } from '../../../assets/styles/timer.styles';
import {memo} from 'react';
type ButtonType = {
    playCountdown: boolean;
    onClick?: () => void,
};
function ButtonPlayPause({ playCountdown, onClick}: ButtonType) {
    return (
        <div>
            <Button onClick={onClick}> {playCountdown ? 'Pause' : 'Play'} </Button>
        </div>
    );
}
export default memo(ButtonPlayPause);