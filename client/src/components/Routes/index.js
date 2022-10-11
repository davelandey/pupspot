import { Get } from "./get";
import { Post } from "./post";
import { Patch } from "./patch";
import { Delete } from "./delete"

export const RouteFetch = {
    post: Post,
    get: Get,
    patch: Patch,
    delete: Delete,
}