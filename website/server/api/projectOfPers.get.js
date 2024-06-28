import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
    
  const client = await serverSupabaseClient(event)
  
  // join between works_project and projects
  const { data: projectData, error: teamError } = await client.from('Works_Project').select(`is_supervisor, id_worker, Project ( title,  image,  id_project )`)


   // Structure the response data
   const projects = projectData.map(item => ({
        id_project: item.Project.id_project,
        title: item.Project.title,
        image: item.Project.image,
        is_supervisor: item.is_supervisor,
        id_worker: item.id_worker,
    }));

    

    // Extract the list of people from the joined data
    return projects;
})