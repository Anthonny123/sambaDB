export const formatDate = (date:Date)=>{
    const fechaObj = new Date(date)
    const year = fechaObj.getFullYear();
    const month = fechaObj.getMonth() + 1;
    const day = fechaObj.getDate()
    return `${year}-${month < 10 ? '0':''}${month}-${day < 10 ? '0':''}${day}`
}