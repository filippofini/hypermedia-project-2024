import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('Service').select('id_service, title, small_desc, image').order('title', {ascending: true})
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})