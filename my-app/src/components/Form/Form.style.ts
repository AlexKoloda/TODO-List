import styled from 'styled-components';

export const FormContainer = styled.div`
  .form {
    display: flex;
    flex: 1;

    &__todo {
      display: flex;
      border-bottom: 4px solid rgb(188 54 24);
      transition: 0.2s;
    }

    &__todo:hover {
      transform: translate(0, -3px);
      box-shadow: 0px 12px 20px 0px rgb(129 191 255);
    }

    &__submit {
      font-family: 'Cormorant Garamond', serif;
      padding: 20px;
      border: none;
      text-transform: uppercase;
      font-size: 25px;
      background-color: white;
      transition: 0.2s;
      cursor: pointer;
      border-top-right-radius: 20px;
    }

    &__submit:hover {
      background-color: rgb(189, 54, 24);
      color: white;
    }

    &__submit:active {
      transform: scale(0.9);
    }

    &__input {
      flex: 1;
      padding: 20px 49px;
      border: none;
      font-size: 25px;
      font-style: italic;
      color: rgb(0 0 0 / 70%);
      transition: 0.5s;
      outline: none;
    }

    &__input:focus {
      background-color: rgb(238 242 245);

      &__submit {
        background-color: rgb(238 242 245);
      }
    }
  }

  @media (320px <=width <=500px) {
    .todo__input {
      font-size: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    .form {
      &__todo {
        display: block;
      }

      &__submit {
        border-top-right-radius: 0;
      }
    }
  }
`;
