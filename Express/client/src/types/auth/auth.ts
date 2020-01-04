/*
 *
 * this is the file that handles the typescript interface for the authorization redux store data structure
 *
 */
export interface AuthTypes {
  email: string;
  password: string;
  isLoggedIn: boolean;
  idToken: string;
  userId: string;
}
