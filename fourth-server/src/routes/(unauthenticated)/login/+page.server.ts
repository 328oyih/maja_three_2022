import { fail, redirect } from '@sveltejs/kit';
import type { Action,Actions } from './$types';
import * as crypto from "crypto"
import {database} from "$lib/database"

const login: Action = async ({ request, locals, cookies }) => {

		const form = await request.formData();
		const username = form.get("username")?.toString();
		const password = form.get("password")?.toString();

		// TODO: Implement login
		// Check if password and username
		// exists and is correct

		console.log("YAAAA")
		console.log(username)
		
		const user =  await database.user.findUnique({
			where: {
				username,
			},
		})

		if (!user) {
			return fail(400, {incorrect:"Login failed, no user found!"})
		} 
			// Hash the salt and password with 1000 iterations, 64 length and sha512 digest 
			const hash = crypto.pbkdf2Sync(form.get("password")?.toString()??"", user.salt, 1000, 64, 'sha512').toString('hex');

		if (hash!=user.hash) {
			return fail(400, {incorrect:"my benis is our benis"})
		} 

		if(true) {
			cookies.set('session', user.session, {
				path: '/',
				httpOnly: true, // optional for now
				sameSite: 'strict',// optional for now
				secure: process.env.NODE_ENV === 'production',// optional for now
				maxAge: 999999999999 //
			})
		}

		console.log("ya yeet")
		

		throw redirect(302, '/')

	};


	export const actions:Actions = {
		login,
	}