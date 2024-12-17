import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 200px;
  box-shadow: inset 0px 0px 80px 20px rgba(0, 0, 0, 0.2);
  .error {
    &__code {
      font-size: 390px;
      margin: 0;
    }

    &__text::first-letter {
      color: rgb(189, 54, 24);
    }

    &__link {
      text-decoration: none;
    }
  }
`;
