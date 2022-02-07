import SingleProject from '../SingleProject'
import statistics from '../../../../Assests/Gifs/Statistics.gif'

const KeepItCool = () => {
    const steps = [
        { path: statistics },
        { path: statistics },
        { path: statistics },
      ];
      const projectInfo = "Keep It Cool to aplikacja służąca do mierzenia ilości wypitych płynów i przygotowania statystyk tygodniowych"
      const techStack = ["React", "Typescript", "Mock server - Express", "Material UI"]
    return (<SingleProject titleTop="Keep It" titleBottom="Cool" maxSteps={3} steps={steps} projectInfo={projectInfo} techStack={techStack}/>)
}

export default KeepItCool