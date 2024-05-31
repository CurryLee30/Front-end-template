export const generateUniqueId = (minLength = 6) => {  
  let result = '';  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
  const charactersLength = characters.length;  
  for (let i = 0; i < minLength; i++) {  
      result += characters.charAt(Math.floor(Math.random() * charactersLength));  
  }  
  // 如果需要更长的ID或者更强的随机性，可以去除以下返回前的检查  
  return result;  
}  