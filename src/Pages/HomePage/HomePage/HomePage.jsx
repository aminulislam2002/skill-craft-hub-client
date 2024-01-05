import CoursesCategories from "../HomePageSections/CoursesCategories/CoursesCategories";
import Statistics from "../HomePageSections/Statistics/Statistics";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";
import TopCourses from "../HomePageSections/TopCourses/TopCourses";
import TopInstructors from "../HomePageSections/TopInstructors/TopInstructors";

const HomePage = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <CoursesCategories></CoursesCategories>
      <TopCourses></TopCourses>
      <Statistics></Statistics>
      <TopInstructors></TopInstructors>
    </div>
  );
};

export default HomePage;
