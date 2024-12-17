import styled from 'styled-components';

export const HeaderContainer = styled.div`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      margin: 0;
      padding: 40px 0;
      font-size: 60px;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.8);
    }

    &__box {
      padding: 10px;
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

  @media (320px <=width <=900px) {
    .header {
      &__title {
        font-size: 40px;
      }
    }
  }
`;
