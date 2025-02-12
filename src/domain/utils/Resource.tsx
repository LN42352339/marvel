// ESTADOS DE LA PETICION
// LOADING
// ERROR
// SUCCESS

export abstract class Resource {
  constructor() {}
}

export function Init(): Resource {
  return {};
}
export function Loading(): Resource {
  return {};
}
export function Success(data: any): Resource {
  return {data};
}
export function Err(error: string): Resource {
  return {error};
}
