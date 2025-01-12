import {type SchemaTypeDefination } from "sanity";
import { Post } from "@/sanity.types";

import author from "./schemas/documents/author";
import comment from "./schemas/documents/comment";
import post from "./schemas/documents/post";


export const schema:{types:SchemaTypeDefination[]}={
    types:[post, author,comment],

}
