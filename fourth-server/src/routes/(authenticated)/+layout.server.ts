import type { LayoutServerLoad } from './$types';
import { redirect, } from '@sveltejs/kit';
import {database} from "$lib/database"







export const load: LayoutServerLoad = async ({ locals, cookies }) => {

    if (locals.session) {

		const user =  await database.user.findFirst({
			where: {
				session: locals.session,
			},
		})
        const clicker =  await database.clicker.findFirst({
			where: {
				authorId: user?.id,
			},
		})
    

        return {totalclicks:clicker?.totalclicks??0 ,count: Number(clicker?.count??0), cookiesonclick: clicker?.cookiesonclick??1, passive: clicker?.passive??0,userid:locals.session}
   
    } else {
        throw redirect(302, '/login')
    }


}

