import type { Cookiemaster } from "./interfaces";
import { database } from "$lib/database";
import type { Cookies } from "@sveltejs/kit";
export class octopus implements Cookiemaster {
    async save(form: FormData, cookies:Cookies): Promise<boolean>{
        //On action save: 
        const count = form.get("count")?.toString()
        const cookiesonclick = form.get("cookiesonclick")?.toString()
        const passive = form.get("passive")?.toString()
        const totalclicks = form.get("totalclicks")?.toString()
        console.log(totalclicks)

        const session = cookies.get("session");
        const result = await database.user.findUnique({where:{session}});
        let success = await database.clicker.upsert({where:{authorId: result?.id}, update: {totalclicks: Number(totalclicks), passive: Number(passive), count: Number(count), cookiesonclick : Number(cookiesonclick)},create:{authorId: result!.id,passive : 0, count: 0, cookiesonclick : 1, totalclicks : 0}})
        
        if(success)
        {
            return true;
        }
        else
        {
            return false;
        }
        
        //collection.updateOne({username: locals.userid}, {$set: {count: form.get("count")}})
        //collection.updateOne({username: locals.userid}, {$set: {cookiesonclick: form.get("cookiesonclick")}})
        //collection.updateOne({username: locals.userid}, {$set: {passive: form.get("passive")}})
    }
}
