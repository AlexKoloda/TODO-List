import styles from "./Loading.module.scss"

 const Loading: React.FC = () => {
  return (
    <div className={styles.loading__box}>
      <h1>Загрузка...</h1>
      <div className={styles.loading__spinner}></div>
    </div>
  )
}

export default Loading;