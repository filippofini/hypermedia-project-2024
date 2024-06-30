import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = await serverSupabaseClient(event)

    const { data:people, error }= await client.from('People').select("id, name, surname, phone_number, email, cv, role, image, description").eq('id', id).single()
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return people
})