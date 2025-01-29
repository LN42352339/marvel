// servicio - informacion
import auth from '@react-native-firebase/auth';
import { Err, Resource, Success } from '../../../domain/utils/Resource';

export interface AuthDataSource {
    login(email: string, password: string): Promise<Resource>;
}

export const login = async (email: string, password: string): Promise<Resource> => {
    try {
        const data = await auth().signInWithEmailAndPassword(email, password);
        return Promise.resolve(Success(data));
    } catch (error:any) {
        console.log('Error',error);
        return Promise.resolve(Err(error.message));
    }
}