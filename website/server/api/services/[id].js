import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = await serverSupabaseClient(event)
    
    // Fetch service details
    const { data: serviceData, error: serviceError } = await client
        .from('Service')
        .select("id_service, description, image, small_desc, title")
        .eq('id_service', id)
        .single();
    if (serviceError) {
        throw createError({ statusCode: 400, statusMessage: serviceError.message });
    }

    // Fetch team details by joining People and Works_Service tables
     // Fetch team details by joining People and Works_Service tables
  const { data: teamData, error: teamError } = await client
  .from('Works_Service')
  .select(`
    is_supervisor,
    People (
      id,
      name,
      surname
    )
  `)
  .eq('id_service', id);

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
    return { Service: serviceData, People: people };
    
})