/* class and type */
class Animal {
  private name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getName(): string {
    return this.name
  }
}

const cat = new Animal('Cat', 5)

/* interface */
interface IProfile extends IWork {
  name: string
  age: number
  isOwner: boolean
}

interface IWork {
  place: string
}

const profile2: IProfile = {} as IProfile

/* type */
type TName = string | number

type TProfile = {
  name: TName
  age: number
  isOwner: boolean
} & TWork

type TWork = {
  place: string
}

const profile3: TProfile = {} as TProfile
