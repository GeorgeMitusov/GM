import { useWebsiteContext } from "../context/context";
import Project from "./Project";

export default function ProjectsList() {
  const { projectsData } = useWebsiteContext();

  const project = projectsData.map((item, id) => (
    <Project key={id} {...item} />
  ));

  return (
    <section className="w-full h-auto py-36 bg-mainColor flex flex-col justify-center items-center border">

      <section id="section1"></section>

      <ul className="w-full flex flex-col items-center">{project}</ul>

    </section>
  );
}
