import { memo } from 'react';
import { Input } from '../../../assets/styles/timer.styles';

interface InputPropsType {
    placeholder: string,
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean
}



const InputCountdown: React.FC<InputPropsType> = ({ placeholder, value, onChange, disabled }) =>  {
    return (
            <Input
                type='number'
                min={0}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
            />


    );
}

export default memo(InputCountdown);