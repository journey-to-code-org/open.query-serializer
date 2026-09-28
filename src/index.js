export function stringifyQuery(object, options = {}) {
  if(object===null||typeof object!=="object"||Array.isArray(object))throw new TypeError("Expected object to be a non-null object");
  const { arrayFormat="repeat", sort=false }=options;
  if(!["repeat","comma"].includes(arrayFormat))throw new RangeError("Expected arrayFormat to be repeat or comma");
  const entries=[];
  for(const [key,value] of Object.entries(object)){
    if(value===undefined)continue;
    if(Array.isArray(value)){
      if(arrayFormat==="comma")entries.push([key,value.map(v=>v??"").join(",")]);
      else for(const item of value)entries.push([key,item??""]);
    } else entries.push([key,value??""]);
  }
  if(sort)entries.sort(([a],[b])=>a.localeCompare(b));
  const params=new URLSearchParams();
  for(const [k,v] of entries)params.append(k,String(v));
  return params.toString();
}
export function parseQuery(query, options = {}) {
  if(typeof query!=="string")throw new TypeError("Expected query to be a string");
  const { arrayFormat="repeat" }=options;
  if(!["repeat","comma"].includes(arrayFormat))throw new RangeError("Expected arrayFormat to be repeat or comma");
  const params=new URLSearchParams(query.startsWith("?")?query.slice(1):query);
  const out={};
  for(const [key,value] of params){
    const values=arrayFormat==="comma"?value.split(","):[value];
    for(const v of values){
      if(!(key in out))out[key]=v;
      else if(Array.isArray(out[key]))out[key].push(v);
      else out[key]=[out[key],v];
    }
  }
  return out;
}
