import { Box, ThemeProvider } from '@mui/material'
import { theme } from '../Profile/theme'
import styles from './SingleProject.module.css'
import ProjectInfo from './ProjectInfo/ProjectInfo'
import ProjectView from './ProjectView/ProjectView'
import TitleAnimation from './Title/TitleAnimation'

interface Props {
    titleTop: string,
    titleBottom: string,
    maxSteps: number,
    steps: {
        path: any;
    }[],
    projectInfo: string,
    techStack: string[]
}

const SingleProject:React.FC<Props> = ({titleTop, titleBottom, maxSteps, steps, projectInfo, techStack}) => {
    return (<Box className={styles.plannerContainer}>
        <ThemeProvider theme={theme}>
          <TitleAnimation titleTop={titleTop} titleBottom={titleBottom}/>
          <Box className={styles.projectContainer}>
            <div>
          <ProjectView steps={steps} maxSteps={maxSteps}/>
          </div>
          <div style={{marginTop: "250px", marginLeft: "50px"}}>
            <ProjectInfo projectInfo={projectInfo} techStack={techStack}/>
          </div>
          </Box>
        </ThemeProvider>
      </Box>)
}

export default SingleProject