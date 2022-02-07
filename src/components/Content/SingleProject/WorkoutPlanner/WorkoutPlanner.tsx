import addingWorkout from '../../../../Assests/Gifs/AddingWorkout.gif'
import calendar from '../../../../Assests/Gifs/Calendar.gif'
import workoutLogging from '../../../../Assests/Gifs/WorkoutPlannerLoggin.gif'
import SingleProject from "../SingleProject";

const WorkoutPlanner = () => {
  const steps = [
    { path: addingWorkout },
    { path: calendar },
    { path: workoutLogging },
  ];
  const projectInfo = "Workout Planner to kreator spersonalizowanych treningów zapisywanych w kalendarzu."
  const techStack = ["React", "Typescript", "Firebase - Authentication, Firestore"]
  return (
    <SingleProject titleTop="Workout" titleBottom="Planner" maxSteps={3} steps={steps} projectInfo={projectInfo} techStack={techStack}/>
  );
};

export default WorkoutPlanner;
