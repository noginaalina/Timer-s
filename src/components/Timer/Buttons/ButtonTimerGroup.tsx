import {memo} from 'react';
import ButtonTimer from './ButtonTimer';
import ButtonPlayPauseTimer from './ButtonPlayPauseTimer';
import { ButtonGroupContainer } from '../../../assets/styles/timer.styles';


interface ButtonGroupTypes {
    playTimer: boolean;
    handlePlayTimer: () => void;
    handleResetTimer: () => void;
}


const ButtonTimerGroup: React.FC<ButtonGroupTypes> = ({ playTimer, handlePlayTimer, handleResetTimer }: ButtonGroupTypes) => {
    return (
        <ButtonGroupContainer>
            <ButtonPlayPauseTimer playTimer={playTimer} onClick={handlePlayTimer} />
         <ButtonTimer title='Reset' onClick={handleResetTimer}/>
        </ButtonGroupContainer>
    );
}

export default memo(ButtonTimerGroup);