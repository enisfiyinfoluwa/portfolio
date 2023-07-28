import {useState, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';

// The problem was from here
//import Link from '../components/Link'
import List from '../components/List';

function Projects({userName}){
    const [loading,setLoading] = useState(true);
    //const [projects,setProjects] = useState( {} );
    const [projects, setProjects] = useState({});

    //the problem was here

    useEffect (()=>{
        async function fetchData(){
            const data = await fetch(
                `https://api.github.com/users/${userName}/repos`
            );
            const result = await data.json()
            if (result){
                setProjects(result);
                setLoading(false);
            }
        }
        fetchData();
    },[userName]);

    return(
        <div className= 'Project-container'>
            <h2>Projects</h2>
            
            {loading? (<span>Loading...</span>):(
                <div> 
                    
                    <List 
                        items= {projects.map((project)=> ({
                            field: project.name,
                            value: (
                                <RouterLink to= {`/projects/${project.name}`}>
                                    Open project
                                </RouterLink> /* This set a new item ie an object.. that is then mapped by List */ 
                                //<Link url={project.html_url} title={project.html_url} />
                            ),}))}
                            />
                </div>
            )} 

        </div>
    );
};

export default Projects;

//This is the working version reading project.map not a function