import {memo} from 'react';
import ButtonCountdown from './ButtonCountdown';
import ButtonPlayPause from './ButtonPlayPause';
import { ButtonGroupContainer } from '../../../assets/styles/timer.styles';


interface ButtonGroupTypes {
    playCountdown: boolean,
    handlePlayCountdown: () => void,
    handleResetCountdown: () => void,
}


const ButtonGroup: React.FC<ButtonGroupTypes> = ({playCountdown, handlePlayCountdown, handleResetCountdown}) => {
    return (
        <ButtonGroupContainer>
            <ButtonPlayPause playCountdown={playCountdown} onClick={handlePlayCountdown} />
         <ButtonCountdown title='Reset' onClick={handleResetCountdown}/>
        </ButtonGroupContainer>
    );
}

export default memo(ButtonGroup);