import styles from './ProjectInfo.module.css'

interface Props {
    projectInfo: string,
    techStack: string[]
}

const ProjectInfo:React.FC<Props> = ({projectInfo, techStack}) => {
    return(
        <>
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.text}>
               {projectInfo}
            </div>
            <div className={styles.techStackContainer}>
                <h2>Tech Stack </h2>
                <div className={styles.techStack}>
                    <div className={styles.line}></div>
                <ul>
                    {techStack.map((stack) => <li>{stack}</li>)}
                </ul>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default ProjectInfo