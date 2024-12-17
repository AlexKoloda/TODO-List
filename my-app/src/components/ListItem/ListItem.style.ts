import styled from 'styled-components';
import checkIcon from './check-icon.png'

export const ListItemStyled = styled.div<{ isComplete: boolean }>`
  .list {
    &__item {
      display: flex;
      font-size: 30px;
      transition: 0.2s;
      justify-content: space-between;
      align-items: center;
      color: rgba(0, 0, 0, 0.7);
      border-bottom: 1px solid rgb(0 0 0 / 20%);
      padding-left: 5px;
    }

    &__checkbox {
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      padding: 20px;
      cursor: pointer;
      transition: 0.2s;
      color: white;
      background-size: 80%;
      background-color: white;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('');
      background-size: 95%;
      background-image:  ${({ isComplete }) =>
        isComplete ? `url(${checkIcon})` : "none"};
    }

    &__checkbox:active {
      background-size: 95%;
      transform: scale(0.8);
      box-shadow: 0px 20px 100px 23px rgb(156 209 255);
      background-color: rgb(242, 249, 255);
    }

    &__checkbox:hover {
      background-color: rgb(255, 255, 255);
    }

    &__text {
      padding: 5px;
      text-align: start;
      overflow: hidden;
      transition: 0.3s;
      text-decoration: ${({ isComplete }) =>
        isComplete ? 'line-through' : 'none'};
      color: ${({ isComplete }) =>
        isComplete ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.8)'};
    }

    &__delete {
      font-family: 'Cormorant Garamond', serif;
      padding: 20px;
      border: none;
      text-transform: uppercase;
      font-size: 25px;
      background-color: white;
      transition: 0.2s;
      cursor: pointer;
    }

    &__delete:hover {
      background-color: rgb(189, 54, 24);
      color: white;
    }

    &__delete:active {
      transform: scale(0.9);
    }
  }
`;
