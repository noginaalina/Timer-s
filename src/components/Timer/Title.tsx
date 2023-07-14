import { memo } from 'react';
import { TimerTitle } from '../../assets/styles/timer.styles';

type TitleType = {
    title: string;
};
function Titles({ title }: TitleType) {
    return (
        <TimerTitle>
            {title} 
        </TimerTitle>
    );
}

export default memo(Titles);
