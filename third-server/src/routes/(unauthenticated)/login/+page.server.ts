import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import {database} from '$lib/database.js'
import * as crypto from "crypto"

export const actions: Actions = {
	login: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		// TODO: Implement login
		// Check if password and username
		// exists and is correct
		
		const session = cookies.get("session");
		const user = await database.findUnique({where:{session}});
		

		if (!user) {
			return invalid(400, {incorrect:"Login failed, no user found!"})
		} 

				

			// Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
			const hash = crypto.pbkdf2Sync(form.get("password")?.toString()??"", user.salt, 1000, 64, 'sha512').toString('hex');

			
		if (hash!=user.hash) {
			return invalid(400, {incorrect:"my benis is our benis"})
		} 	



		
		if(true) {
			cookies.set('userid', user?.username??"Elton John", {
				path: '/',
				httpOnly: true, // optional for now
				sameSite: 'strict',// optional for now
				secure: process.env.NODE_ENV === 'production',// optional for now
				maxAge: 999999999999 //
			})
		}

		throw redirect(302, '/')

	},
};
