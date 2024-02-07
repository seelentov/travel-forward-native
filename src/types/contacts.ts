export interface IContacts {
  number: string
  worktime: string
  address: string
  social: ContactsSocial[]
}

export interface ContactsSocial {
  icon: string
  link: string
}