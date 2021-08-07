import UrlConfig from "../UrlConfig.json";
export const authResponseStoredValue = "auth-response-stored-value";


export function getBaseUrl(){
    return {baseUrl: UrlConfig.LOCAL.core}
}