import styled from 'styled-components';

export const FooterDescriptionContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  .footer__description {
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
