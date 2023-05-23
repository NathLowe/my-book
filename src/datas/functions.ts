import vertical1 from "@/assets/images/vertical-1.jpg"
import vertical2 from "@/assets/images/vertical-2.jpg"
import vertical3 from "@/assets/images/vertical-3.jpg"
import horizontal1 from "@/assets/images/horizontal-1.jpg"
import horizontal2 from "@/assets/images/horizontal-2.jpg"
import horizontal3 from "@/assets/images/horizontal-3.jpg"


const images = [vertical1,vertical2,vertical3,horizontal1,horizontal2,horizontal3]
export const randomImage = ()=>{
  let index = Math.floor(Math.random() * images.length)
  return images[index===0 ? 0 : (index-1)]
}

export const randomNumber = (max:number=10):number=>{
  return Math.ceil(Math.random()*max)
}

export const randomArray = (items:number=10):number[] =>{
  let array = []
  for (let index = 0; index < items; index++) {
    array.push(1)
  }
  return array
}

export const randomizeArray = <T>(initialArray:T[]) =>{
  let newArray = []
  let previousArray = [...initialArray]
  while(previousArray.length > 0){
    newArray.push(previousArray.splice(randomNumber(previousArray.length - 1),1)[0])
  }
  return newArray
}