import { Client, Account, ID } from 'appwrite';
import Snackbar from 'react-native-snackbar';

const client = new Client();
client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1') 
  .setProject('685d13ae0009b272f0d9');

  // instance of Account class which provides below methods
const account = new Account(client);

type createUserAccount = {
  name:string;
  email:string;
  password:string;
}
type loginUser = {
  email:string;
  password:string;
}

// SignUp
export const createAccount = async ({email, password, name}:createUserAccount) => {
  try{
    const response = await account.create(ID.unique(), email, password, name);
    return response;
  }catch (error){
    Snackbar.show({
      text:String(error),
      duration:Snackbar.LENGTH_SHORT,
    })
    return null;
  }
}

// Login

export const login = async ({email, password}:loginUser) => {
  try{
    const session =  await account.createEmailPasswordSession(email, password);
    return session;
  }catch (error) {
    Snackbar.show({
      text: String(error),
      duration: Snackbar.LENGTH_SHORT,
    })
    return null;
  }
}
  
// Get current login user

export const getCurrentUser = async () => {
  try{
    const user = await account.get();
    return user;
    
  }catch (error){
    Snackbar.show({
      text: String(error),
      duration: Snackbar.LENGTH_SHORT,
    })
    return null;
  }
}
  
// Logout

export const logout = async () =>{
  try{
    await account.deleteSession('current');
    return true;
  }catch (error){
    Snackbar.show({
      text: String(error),
      duration: Snackbar.LENGTH_SHORT,
    })
    return null;
  }
}
