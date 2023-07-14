import React from 'react';
import Timer from './components/Timer/Timer';
import Countdown from './components/Countdown/Countdown';
import { Background } from './assets/styles/timer.styles';

function App() {
    return (
        <Background>
            <Timer />
            <Countdown />
        </Background>
    );
}

export default React.memo(App);
