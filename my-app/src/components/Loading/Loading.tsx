import { LoadingContainer } from './Loading.style';


 const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <h1>Загрузка...</h1>
      <div className="loading__spinner"></div>
    </LoadingContainer>
  )
}

export default Loading;