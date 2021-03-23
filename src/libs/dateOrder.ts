


export const date = (): { now: string, returned: String } => {

   const d: Date = new Date();

   const now: string = d.toISOString().slice(0, 10);

   const d2: Date = new Date(d.getFullYear(), d.getMonth(), (d.getDate() + 7));

   const returned: string = d2.toISOString().slice(0, 10);

   return {
      now, returned
   }

}
