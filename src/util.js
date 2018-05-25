
/**
 * 
 * 公用方法
 * */ 
export function getRedirectPath({type,avatar}){
    /* 
    *根据用户信息  返回跳转地址
    * 根据user.type  /boss  /genius
    * 根据user.avatar /bossinfo /geniusinfo
    */
   let url = (type === 'boss')?'/boss':'/genius';
   if(!avatar){
      return url += 'info';
   }
   return url
}