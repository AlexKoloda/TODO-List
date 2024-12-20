import styled from 'styled-components';

export const ListContainer = styled.div`
  .list {
    list-style: none;
    margin: 0px 0 0;
    padding: 0;
    background-color: white;
    transition: 0.5s;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .list::after {
    box-shadow: 0px 40px 100px 23px rgba(0, 0, 0, 0.2);
  }

  .list::before {
    box-shadow: 0px 40px 100px 23px rgba(0, 0, 0, 0.2);
  }
`;
