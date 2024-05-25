import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = await serverSupabaseClient(event)
    
    // Fetch project details
    const { data: projectData, error: projectError } = await client
        .from('Project')
        .select("id_project, year, description, image, small_desc, title")
        .eq('id_project', id)
        .single();
    if (projectError) {
        throw createError({ statusCode: 400, statusMessage: projectError.message });
    }

    // Fetch team details by joining People and Works_Project tables
     // Fetch team details by joining People and Works_Project tables
  const { data: teamData, error: teamError } = await client
  .from('Works_Project')
  .select(`
    is_supervisor,
    People (
      id,
      name,
      surname
    )
  `)
  .eq('id_project', id);

   // Structure the response data
   const people = teamData.map(item => ({
    id: item.People.id,
    name: item.People.name,
    surname: item.People.surname,
    is_supervisor: item.is_supervisor
  }));

    if (teamError) {
        throw createError({ statusCode: 400, statusMessage: teamError.message });
    }

    // Extract the list of people from the joined data
    return { Project: projectData, People: people };
    
})