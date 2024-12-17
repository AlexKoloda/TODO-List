import { FooterDescriptionContainer } from './FooterDescription.style';

type FooterType = {
  text: string;
};

const FooterDescription: React.FC<FooterType> = (props) => {
  return (
    <FooterDescriptionContainer>
      <p>{props.text}</p>
      <p>
        Создано{' '}
        <a
          href='https://github.com/AlexKoloda'
          className='footer__description__link'
        >
          Алексеем Колодой
        </a>
      </p>
      <p>FUSION Interns</p>
    </FooterDescriptionContainer>
  );
};

export default FooterDescription;
