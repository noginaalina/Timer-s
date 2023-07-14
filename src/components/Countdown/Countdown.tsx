import useHelpersCountdown from '../../hooks/helpersCountdown';
import ButtonGroup from './Buttons/ButtonGroup';
import {ContainerInput, CountdownStyles } from '../../assets/styles/timer.styles';
import { memo } from 'react';
import TitleCountdown from './TitleCountdown';
import CountdownCount from './CountdownCount';
import InputCountdown from './Inputs/InputCountdown';


const Countdown = memo(() => {
    const {
        handlePlayCountdown,
        handleResetCountdown,
        secondsCountdown,
        minutesCountdown,
        playCountdown,
        handleChangeMinutes,
        handleChangeSeconds,
        inputMinutes,
        inputSeconds,
    } = useHelpersCountdown();

    return (
        <CountdownStyles>
            <TitleCountdown title='Countdown' />
           <CountdownCount minutesCountdown={minutesCountdown} secondsCountdown={secondsCountdown}/>
           <ContainerInput>
            <InputCountdown disabled={playCountdown} onChange={handleChangeMinutes} placeholder='Minutes' value={inputMinutes} />
            <InputCountdown disabled={playCountdown} onChange={handleChangeSeconds} placeholder='Seconds' value={inputSeconds}/>
        </ContainerInput>
            <ButtonGroup
         handlePlayCountdown={handlePlayCountdown} handleResetCountdown={handleResetCountdown} playCountdown={playCountdown} 
            />
        </CountdownStyles>
    );
});
export default Countdown;
