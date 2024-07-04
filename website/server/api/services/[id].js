import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const serviceId = event.context.params.id
    const client = await serverSupabaseClient(event)

    // Fetch service details along with team members
    const { data: serviceData, error: serviceError } = await client
        .from('Service')
        .select(`
            id_service, 
            description, 
            image, 
            small_desc, 
            title, 
            schedule,
            Works_Service (
                is_supervisor,
                People (
                    id,
                    name,
                    surname
                )
            )
        `)
        .eq('id_service', serviceId)
        .single()

    if (serviceError) {
        throw createError({ statusCode: 400, statusMessage: serviceError.message })
    }

    // Structure the response data
    const serviceDetails = {
        ...serviceData,
        People: serviceData.Works_Service.map(item => ({
            id: item.People.id,
            name: item.People.name,
            surname: item.People.surname,
            is_supervisor: item.is_supervisor
        }))
    }

    // Return the structured response
    return { Service: serviceDetails }
})