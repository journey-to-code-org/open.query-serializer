export type QueryPrimitive = string | number | boolean | null | undefined;
export type QueryValue = QueryPrimitive | QueryPrimitive[];
export interface QueryOptions { arrayFormat?: "repeat" | "comma"; sort?: boolean; }
export function stringifyQuery(object:Record<string,QueryValue>, options?:QueryOptions):string;
export function parseQuery(query:string, options?:Pick<QueryOptions,"arrayFormat">):Record<string,string|string[]>;
