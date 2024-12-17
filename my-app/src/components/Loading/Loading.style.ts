import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
  padding: 100px;

  .loading {
    &__spinner {
      width: 80px;
      height: 80px;
      border: 9px solid rgb(204 204 204);
      border-radius: 50%;
      border-right-color: #000000;
      animation: spin 1s ease infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
