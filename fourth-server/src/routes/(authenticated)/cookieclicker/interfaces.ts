import type { Cookies } from "@sveltejs/kit";
export interface Cookiemaster {
    save(form: FormData, cookies:Cookies): Promise<boolean>;
}

