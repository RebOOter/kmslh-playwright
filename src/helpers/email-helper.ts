export class EmailHelper {
    static getDomain(email: string | null | undefined) {
        if (!email || !email.includes('@')) {
            return '';
        }

        return email.substring(email.indexOf('@') + 1);
    }
}