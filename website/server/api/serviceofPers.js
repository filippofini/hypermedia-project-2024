import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
    
  const client = await serverSupabaseClient(event)
  
  // join between works_service and services
  const { data: serviceData, error: teamError } = await client
  .from('Works_Service')
  .select(`
    is_supervisor,
    id_worker,
    Service (
      title,
      image,
      id_service
    )
  `)


   // Structure the response data
   const service = serviceData.map(item => ({
        id_service: item.Service.id_service,
        title: item.Service.title,
        image: item.Service.image,
        is_supervisor: item.is_supervisor,
        id_worker: item.id_worker,
    }));

    

    // Extract the list of people from the joined data
    return service;
})