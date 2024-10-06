/* Utility types */
interface IProfile2 {
  name: string
  age: number
  isOwner: boolean
}

/* From T, pick a set of properties whose keys are in the union K */
const profilePick: Pick<IProfile2, 'name'> = {
  name: 'John',
}

/* Construct a type with the properties of T except for those in type K. */
const profileOmit: Omit<IProfile2, 'name'> = {
  age: 21,
  isOwner: true,
}

/* Make all properties in T optional */
const profilePartial: Partial<IProfile2> = {}

/* Make all properties in T required */
const profileRequired: Required<IProfile2> = {
  name: 'John',
  age: 21,
  isOwner: true,
}

const profileReadonly: Readonly<Pick<IProfile2, 'age'>> = {
  age: 21,
}

// profileReadonly.age = 25 // Cannot assign to 'age' because it is a read-only property.

const profileRecord: Record<'name' | 'age', string> = {
  name: 'John',
  age: '21',
}

const store: Record<string, number> = {
  ford: 10000000,
}
