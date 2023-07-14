import styled from 'styled-components';

export const Background = styled.div`
    margin: 0
    display: flex;
    background-color: white;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
`;

export const TimerTitle = styled.h1`
    margin-bottom: 20px;
    text-align: center;
    color: #0c0c0c;
    text-transform: uppercase;
`;

export const Button = styled.button`
    font-size: large;
    margin-left: 10px;
    padding: 7px;
    outline: none;
    border: none;
    border: 2px solid #122932;
    background: none;
    color: #122932;
    border-radius: 10px;
    cursor: pointer;
`;


export const TimerStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Input = styled.input`
    flex: 1;
    outline: none;
    padding: 0.8rem 0.6rem;
    border: 3px solid #122932;
    background: none;
    color: #122932;
    border-radius: 10px;
    font-size: 16px;
    letter-spacing: 0.3ch;
    margin-bottom: 20px;
    margin-right: 10px;
    width: 150px
`;

export const CountdownStyles = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Count = styled.h1`
    text-align: center;
    color: #0c0c0c;
    text-transform: uppercase;
    margin-top: 0px
`;
export const CountdownTitle = styled.h1`
    text-align: center;
    color: #0c0c0c;
    text-transform: uppercase;
`;
export const ButtonGroupContainer = styled.div`
width: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerInput = styled.label`
  display: flex;
`