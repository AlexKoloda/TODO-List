import { pluralize } from '../../ util/pluralize';
import styled from 'styled-components';

type CountProps = {
  length: number;
};

const Count: React.FC<CountProps> = ({ length }) => {
  return (
    <CountStyle>
      <p className="count__text">
        {length} {pluralize(length, ['задача', 'задачи', 'задач'])}
      </p>
    </CountStyle>
  );
};

export default Count;

const CountStyle = styled.div`
  .count {
    &__text {
      font-family: 'Cormorant Garamond', serif;
      padding-left: 10px;
      font-size: 20px;
    }
  }
`;
