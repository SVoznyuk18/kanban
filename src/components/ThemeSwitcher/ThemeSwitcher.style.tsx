import styled from 'styled-components';


export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  min-width: 235px;
  height: 48px;
  border-radius: 4px;
  background-color: #F4F7FD;
`;

export const Switcher = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 20px;
  margin: 0 25px;

  input {
    display: none;
  }

  input:checked + span:before {
    transform: translateX(25px);
    background-color: #fff; 
  }

  &: hover {
    span {
      background-color: #A8A4FF;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    background-color: #635FC7;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;

    &:before {
        position: absolute;
        content: "";
        left: 2px;
        top: 2px;
        width: 15px;
        height: 15px;
        background-color:  #fff;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }
  }
`;