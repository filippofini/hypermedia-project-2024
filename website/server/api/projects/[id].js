import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const projectId = event.context.params.id
    const client = await serverSupabaseClient(event)

    // Fetch project details along with team members
    const { data: projectData, error: projectError } = await client
        .from('Project')
        .select(`
            id_project, 
            year, 
            description, 
            image,
            title,
            Works_Project (
                is_supervisor,
                People (
                    id,
                    name,
                    surname
                )
            )
        `)
        .eq('id_project', projectId)
        .single()

    if (projectError) {
        throw createError({ statusCode: 400, statusMessage: projectError.message })
    }

    // Structure the response data
    const projectDetails = {
        ...projectData,
        People: projectData.Works_Project.map(item => ({
            id: item.People.id,
            name: item.People.name,
            surname: item.People.surname,
            is_supervisor: item.is_supervisor
        }))
    }

    // Return the structured response
    return { Project: projectDetails }
})
