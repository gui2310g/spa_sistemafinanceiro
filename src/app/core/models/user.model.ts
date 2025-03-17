export interface User {
  id: number
  nome?: string,
  email: string,
  token: string,
  role: EUsuario
}

export enum EUsuario {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER'
}
