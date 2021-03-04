export interface Team {
    id: string,
    name: string,
    description?: string,
    website: string,
    type: string,
    tags?: string[],
    formation?: string // tornar obrigatório
}