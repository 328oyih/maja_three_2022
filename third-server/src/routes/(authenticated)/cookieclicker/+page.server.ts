import type { Actions, PageServerLoad } from "./$types";
import * as database from "$lib/database"

export const load: PageServerLoad = async ({locals}) => {
    //On load:

    const client = await database.connect()
    const db =  client.db("test")
    const collection =  db.collection("users")

    const user = await collection.findOne({username: locals.userid})

    return {count: user?.count??0, cookiesonclick: user?.cookiesonclick??1, passive: user?.passive??0}
}

export const actions:Actions = {
    save: async ({request, locals}) => {
        let form = await request.formData()

        //On action save: 
        const client = await database.connect()
        const db =  client.db("test")
        const collection =  db.collection("users")
        
        collection.updateOne({username: locals.userid}, {$set: {count: form.get("count")}})
        collection.updateOne({username: locals.userid}, {$set: {cookiesonclick: form.get("cookiesonclick")}})
        collection.updateOne({username: locals.userid}, {$set: {passive: form.get("passive")}})

    }
}