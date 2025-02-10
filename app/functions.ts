export default function Play() {
    const name: string = "Abdul Qayyum"
    const age: number = 37
    
      function personInfo(pName: string , pAge: number) {
        const info = `name: + ${pName}, age: + ${pAge}`
        console.log(info)
        return info
      }
      personInfo(name, age)
    }