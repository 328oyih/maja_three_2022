import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export const load: LayoutServerLoad = async ({ locals, cookies }) => {
    if(!cookies.get("session")) {
        throw redirect (300, "/login")
    }




}






