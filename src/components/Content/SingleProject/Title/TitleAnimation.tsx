import styles from './TitleAnimation.module.css'

interface Props {
  titleTop: string,
  titleBottom: string
}

const TitleAnimation:React.FC<Props> = ({titleTop, titleBottom}) => {
    return (
        <div className={styles.animatedTitle}>
        <div className={styles.textTop}>
          <div>
        <span>{titleTop}</span>
        </div>
        </div>
        <div className={styles.textBottom}>
          <div>{titleBottom}</div>
        </div>
        </div>
    );
}

export default TitleAnimation