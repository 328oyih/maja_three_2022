import { fail, redirect } from '@sveltejs/kit';
import { ObjectID } from 'bson';
import {database} from "$lib/database.js";
import type { Actions,PageServerLoad } from './$types';




export const actions: Actions = {
	logout: async ({ request, locals, cookies }) => {
        console.log("yoer")
		cookies.delete('session');
        cookies.set('session', "", {
            path: '/',
            httpOnly: true, // optional for now
            sameSite: 'strict',// optional for now
            secure: process.env.NODE_ENV === 'production',// optional for now
            maxAge: -100000000 //
        })
		throw redirect(302, '/')

	},
    
};
export const load: PageServerLoad = async ({cookies}) => {
    const session = cookies.get("session");
    const result = await database.user.findUnique({where:{session},include:{clicker:true}});
    if(result){
        return result;
    };
}
