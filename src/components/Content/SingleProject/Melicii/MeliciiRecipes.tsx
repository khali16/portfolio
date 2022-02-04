import SingleProject from "../SingleProject"
import meliciiOverview from '../../../../Assests/Gifs/MeliciiOverview.gif'

const MeliciiRecipes= () => {
    const steps = [
        { path: meliciiOverview },
        { path: meliciiOverview },
        { path: meliciiOverview },
      ];
      const projectInfo = "Melicii Recipes to CMS do tworzenia przepisów, korzystania z ich i oceniania."
      const techStack = ["React", "Typescript","Redux Toolkit", "Axios", "Mock server - Express", "Material UI"]

    return (
        <SingleProject titleTop="Melicii" titleBottom="Recipes" maxSteps={3} steps={steps} projectInfo={projectInfo} techStack={techStack}/>
    )
}

export default MeliciiRecipes