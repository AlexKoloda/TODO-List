import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 500px;
  margin: 0 auto;

  .sign_up {
    &__title {
      margin: 0;
      font-size: 40px;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.8);
      text-align: center;
      padding: 20px;
    }

    &__title::first-letter {
      color: rgb(189, 54, 24);
    }

    &__input {
      display: flex;
      flex: 1 1;
      padding: 20px 50px;
      margin-top: 10px;
      border: none;
      font-size: 20px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.7);
      transition: 0.5s;
      outline: none;
      box-shadow: 0px 80px 100px 10px rgba(0, 0, 0, 0.2);
    }

    &__form {
      display: flex;
      flex-direction: column;
    }

    &__submit {
      font-family: 'Cormorant Garamond', serif;
      padding: 10px;
      border: none;
      text-transform: uppercase;
      font-size: 15px;
      background-color: white;
      transition: 0.2s;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }

    &__submit:hover {
      background-color: rgb(189, 54, 24);
      color: white;
    }

    &__submit:active {
      transform: scale(0.9);
    }

    &__description {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
    }

    &__link {
      color: rgb(139, 30, 30);
      position: relative;
      cursor: pointer;
      text-decoration: none;
    }

    &__link:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      bottom: 1px;
      width: 0;
      height: 2px;
      background-color: black;
      transition: width 0.3s;
    }

    &__link:hover:after {
      content: '';
      width: 100%;
      display: block;
      position: absolute;
      left: 0;
      bottom: 1px;
      height: 2px;
      background-color: rgb(139, 30, 30);
      transition: width 0.3s;
    }
  }
`;
