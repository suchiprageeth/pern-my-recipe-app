import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY;
console.log(2, apiKey)

export const searchRecipes = async (searchTerm:string, page:number)=>{
    if (!apiKey){
        throw new Error("API key not found");
    }

    // Call the API
    const url = new URL(`https://api.spoonacular.com/recipes/complexSearch`);

    const queryParams = {
        apiKey,
        query: searchTerm,
        number: "10",
        offset:(page * 10).toString()
    }

url.search = new URLSearchParams(queryParams).toString();

    try{
    const searchResponse = await fetch(url);
        return await searchResponse.json();
    }catch(error){
        console.error(error);
    }
}