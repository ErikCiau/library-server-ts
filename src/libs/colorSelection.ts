
export const colors: Array<string> = ['#693c72', '#435560', '#cee6b4', '#413c69', '#28527a'];


export const colorRandom = (arr: Array<string>): string => {
   return arr[Math.floor(arr.length * Math.random())];
}

