export interface Assets {
    data: Asset[]
    totalCount: number
  }
  
  export interface Asset {
    id: number
    name: string
    contactPerson: string
    contactPersonPhoneNumber: string
    contactPersonEmail: string
    isActive: boolean
    filePath: string
  }