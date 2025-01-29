import { Resource } from "../../domain/utils/Resource";
import { AuthDataSource } from "../datasource/remote/AuthDataSource"

export interface AuthRepository {
    login(email: string, password: string): Promise<Resource>;
}

export const AuthRepository = ({AuthDataSource}: {AuthDataSource: AuthDataSource}) => {
    return {
        async login(email: string, password: string) {
            return await AuthDataSource.login(email, password);
        }
    }
}