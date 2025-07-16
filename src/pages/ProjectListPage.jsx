import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const BASE_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectListPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + "/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((e) => console.log("error", e));
  }, []);

  if (projects === null) {
    return <Loader />; //use null because is the initial state, better not to use === 0 because if it's really empty we're sending a wrong message to the user
  }

  return (
    <div>
      <h1>project list page</h1>
      <h1>Num of Projects: {projects.length}</h1>
       
       {projects.map((projectObj) => {
        console.log(projectObj) //check properties in the obj
        return (
            <div className="card" key={projectObj.id}>
                <h3>{projectObj.title}</h3>
                <p>{projectObj.description}</p>
        

            </div>
        )
       })}


    </div>
  );
}

export default ProjectListPage;
