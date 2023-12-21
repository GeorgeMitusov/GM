import { useWebsiteContext } from "../context/context";
import Project from "./Project";

export default function ProjectsList() {
  const { projectsData } = useWebsiteContext();

  const project = projectsData.map((item, id) => (
    <Project key={id} {...item} />
  ));

  return (
    <section className="w-full h-auto py-36 bg-mainColor flex flex-col justify-center items-center">
      <section id="section1"></section>

      <ul
        className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 lLaptop:w-5/12 
          2xl:w-5/12 3xl:w-5/12 4xl:w-4/12
          flex flex-col items-center px-2"
      >
        {project}
      </ul>
    </section>
  );
}
