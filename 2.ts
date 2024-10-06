const numbers: number[] = [1, 2, 3, 4, 5]
const numbers2: Array<number> = [1, 2, 3, 4, 5]

const numbers3: [number, number] = [1, 2]
const profile1: [string, number] = ['John', 21]

/* functions */
function getAge(name?: string): number {
  return 21
}
// getAge('John')

const getAge2 = (name?: string): number => 25
// getAge2('John')

/* REST */
function getFullName(firstName: string, ...names: string[]) {
  return firstName + ' ' + names.join(' ')
}
// getFullName('John', 'Doe', 'Smith') // John Doe Smith

/* function overloads */
function getInfo(name: string): string
function getInfo(age: number): number
function getInfo(single: boolean): boolean
function getInfo(value: any): any {
  return value
}

const result = getInfo('John')
const result2 = getInfo(21)
