export enum METHOD {
    GET = "GET",
    POST= "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

interface ApiTypes {
    method: METHOD;
    uri: string;
    payload?: any;
}

export default async function api<T>(args : ApiTypes) : Promise<T> {
   const fetchParams = {
    method: args.method,
    ...args?.payload && ({
        body: JSON.stringify(args.payload)
    })
   }
   const apiResponse = await fetch(`http://localhost:3005/${args.uri}`, fetchParams);
   if (apiResponse.ok) {
    return apiResponse.json();
   }
   throw new Error("Failed to fetch");
}