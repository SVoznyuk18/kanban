import styled from 'styled-components';

export const Switcher = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 20px;
  margin: 0 0.75rem;

  input {
    display: none;
  }

  input:checked + span:before {
    transform: translateX(25px);
    background-color: #fff; 
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
        width: 14px;
        height: 14px;
        background-color:  #fff;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }
  }
`;