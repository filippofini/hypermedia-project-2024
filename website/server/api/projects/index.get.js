import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Project').select('id_project, title, year, small_desc, image').order('title', {ascending: true})
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    const transformedData = data.map(project => ({
        ...project,
        year: project.year.split('-')[0]  // Extract the year part
    }));

    return transformedData
})