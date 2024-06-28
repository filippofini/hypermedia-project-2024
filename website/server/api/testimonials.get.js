import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error } = await client.from('Testimonials').select('id_service, name, image, quote')
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data;
})