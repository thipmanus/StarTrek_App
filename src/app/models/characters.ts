export interface Character {
    name: string
    deceased: boolean
}

export interface QuertCharacter {
    hasNext: boolean
    characters: Character[]
}