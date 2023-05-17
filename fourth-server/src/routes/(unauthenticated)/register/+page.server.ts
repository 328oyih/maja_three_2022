import type { Actions,  PageServerLoad  } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import * as crypto from "crypto"
import {database} from "$lib/database"


export const load: PageServerLoad = async ({locals}) => {
    //On load:
	if(locals.session){
		throw redirect(300,'/')
	}

}

export const actions: Actions = {
	register: async ({ request, locals, cookies }) => {
		const form = await request.formData();

		// TODO: Implement register
		// Check if ustername already exist etc.
		const username = form.get("username")?.toString();
		const password = form.get("password")?.toString();

		const user =  await database.user.findFirst({
			where: {
				username: username,
			},
		})


		if(user){
			// TODO if username taken -- invalid
			return fail(400, { message: "user already taken" })
		}
		
		if (password && password.toString().length < 5) {
			return fail(400, { message: "password is shit" })
		}


		
		if (username && password && password.toString().length > 5) {


				// Creating a unique salt for a particular user
			let salt = crypto.randomBytes(16).toString('hex');

				// Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
			const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

				
			const session = crypto.randomUUID();
			
			const userInfo = {
				username: username,
				password: password,
				salt: salt,
				hash: hash,
				session,
			}

			cookies.set("session", userInfo.session, {
				path: "/",
				httpOnly: true, // optional for now
				sameSite: "strict", // optional for now
				secure: process.env.NODE_ENV === "production", // optional for now
				maxAge: 1000, //
			  });
	
	
			await database.user.create({data:userInfo})
			throw redirect(302,'/login')

		}

		

	},
};
