import { serverSupabaseClient } from '#supabase/server'

export default  defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('People').select('id, name, surname, role, image').order('name', {ascending: true})
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})