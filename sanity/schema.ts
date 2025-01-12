import { type SchemaTypeDefinition } from 'sanity';
import author from "./schemas/documents/author";
import comment from "./schemas/documents/comment";
import post from "./schemas/documents/post";

export const Schema: { types: SchemaTypeDefinition[] } = {
  
  types:[post, author, comment],
}




