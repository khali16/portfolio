import SingleProject from "../SingleProject";
import meliciiOverview from "../../../../Assests/Gifs/MeliciiOverview.gif";
import newRecipe from "../../../../Assests/Gifs/NewRecipe.gif";
import searchComponent from "../../../../Assests/Gifs/SearchComponent.gif";

const MeliciiRecipes = () => {
  const steps = [
    { path: meliciiOverview },
    { path: newRecipe },
    { path: searchComponent },
  ];
  const projectInfo =
    "Melicii Recipes to CMS do tworzenia przepisów, korzystania z nich i oceniania.";
  const techStack = [
    "React",
    "Typescript",
    "Redux Toolkit",
    "Axios",
    "Mock server - Express",
    "Material UI",
  ];

  return (
    <SingleProject
      titleTop="Melicii"
      titleBottom="Recipes"
      maxSteps={3}
      steps={steps}
      projectInfo={projectInfo}
      techStack={techStack}
    />
  );
};

export default MeliciiRecipes;
