import type { Actions, PageServerLoad } from "./$types";
import {database} from "$lib/database"


import { octopus } from "./save";

const saveProgress = new octopus();

export const load: PageServerLoad = async ({cookies}) => {
    const session =cookies.get("session");
    const result = await database.user.findUnique({where:{session}});
    if (result) {
        return result;
    }
}


export const actions:Actions = {
    save: async ({request, locals,cookies}) => {

            const form = await request.formData()

            const success = await saveProgress.save(form, cookies);

            if(success)
            {
                console.log("SUCESSSSSSSSSSSSSs");
            }
    }
}
