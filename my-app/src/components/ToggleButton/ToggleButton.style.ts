import styled from 'styled-components';

export const ToggleButtonStyled = styled.div<{visible: number}>`

.toggle_button {
  visibility: ${ ({visible}) => !visible ? "hidden" : "visible"};
  font-family: 'Cormorant Garamond', serif;
      border: 0;
      background: white;
      text-transform: uppercase;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
      cursor: pointer;
      border-bottom: 1px solid rgb(0 0 0 / 20%);
      width: 100%;
}

.toggle_button:hover {
      transform: translate(0, -3px);
      background-color: rgb(189, 54, 24);
      color: white;
    } 

`;
