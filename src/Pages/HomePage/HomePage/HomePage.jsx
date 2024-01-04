import CoursesCategories from "../HomePageSections/CoursesCategories/CoursesCategories";
import TopBanner from "../HomePageSections/TopBanner/TopBanner";
import TopCourses from "../HomePageSections/TopCourses/TopCourses";

const HomePage = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <CoursesCategories></CoursesCategories>
      <TopCourses></TopCourses>
    </div>
  );
};

export default HomePage;
