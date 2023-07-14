import {memo} from 'react';

import {Button} from '../../../assets/styles/timer.styles'

 interface ButtonType {
     title: string,
     onClick?: () => void,
 }

function ButtonTimer({title, onClick}: ButtonType) {
    return (
            <Button onClick={onClick} >
                {title}
            </Button>
    );
}

export default memo(ButtonTimer);