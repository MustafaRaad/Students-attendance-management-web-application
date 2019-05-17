export interface User {
   uid: string;
   email: string;
   displayName?: string;
   department:string;
   photoURL?: string;
   emailVerified: boolean;
}