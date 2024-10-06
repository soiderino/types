/* Enum */
enum Colors {
  RED,
  GREEN,
  BLUE,
}

enum Tokens {
  accessToken,
  refreshToken,
}

const primary: Colors = Colors.BLUE
const token: Tokens = Tokens.accessToken

/* Assertions */
const someValue: any = 'this is a string'
const strLength: number = (someValue as string).length

/* Generic */
function getCar<T extends string>(name: T): T {
  return name
}
getCar('Ford')
/* getCar(25) */ // because we extend T to string
