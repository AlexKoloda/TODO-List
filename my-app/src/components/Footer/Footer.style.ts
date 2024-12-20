import styled from 'styled-components';

export const FooterContainer = styled.div`

.footer {
  &__nav {
    display: flex;
    align-items: center;
    margin-top: 20px;
    background: white;
    justify-content: space-between;
    width: 100%;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    box-shadow: 0px 80px 100px 10px rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 20px;
  }

  &__list {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  &__button {
    padding: 20px;
    color: rgb(0, 0, 0);
    border: none;
    background-color: white;
    transition: 0.5s;
    font-family: "Cormorant Garamond", serif;
    font-size: 20px;
    cursor: pointer;
  }

  &__button:active {
    transform: scale(0.9);
  }

  &__button:focus{
    border:  rgb(189, 54, 24);
  }

  &__delete {
    font-family: "Cormorant Garamond", serif;
    padding: 17px;
    border: none;
    text-transform: uppercase;
    font-size: 25px;
    background-color: white;
    transition: 0.2s;
    cursor: pointer;
  }
  &__button:hover,
  &__delete:hover {
    background-color: rgb(189, 54, 24);
    color: white;
  }

  &__delete:active {
    transform: scale(0.9);
  }
}

@media (320px <=width <=900px) {
  .footer {
    &__nav {
      flex-direction: column;
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
  }
}


`;

