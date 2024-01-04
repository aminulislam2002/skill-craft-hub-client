import { useForm } from "react-hook-form";

const TopCourses = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-20 px-4 relative bg-primary-bg">
      {/* Part one */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
        <div>
          <h1 className="text-primary-text text-2xl font-Nunito font-bold mb-2">Browse Our Top Courses</h1>
          <p className="text-secondary-text text-lg">
            Cum doctus civibus efficiantur in imperdiet deterruisCum doctus civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>
        <div className="flex justify-end items-start">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("gender")} className="w-60 h-14 px-5 rounded-md border">
              <option value="all">All</option>
              <option value="webDevelopment">Web Development</option>
              <option value="webDesign">Web Design</option>
              <option value="graphicsDesign">Graphics Design</option>
              <option value="softwareDevelopment">Software Development</option>
              <option value="3dAnimation">3D Animation</option>
            </select>
          </form>
        </div>
      </div>

      {/* Part two */}
    </div>
  );
};

export default TopCourses;
