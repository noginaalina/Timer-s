import { memo } from 'react';
import { CountdownTitle } from '../../assets/styles/timer.styles';

type TitleType = {
    title: string;
};
function TitleCountdown({ title }: TitleType) {
    return (
        <CountdownTitle>
            {title}
        </CountdownTitle>
    );
}

export default memo(TitleCountdown);
