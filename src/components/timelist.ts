
// 活动开始时间
export const startTime = ()=> {
  const startTime = new Date(Date.now())
  startTime.setUTCDate(15)
  startTime.setUTCHours(8)
  startTime.setUTCSeconds(0)
  startTime.setUTCMinutes(0)
  
  return startTime 
}
// 活动结束时间
export const endTime = ()=> {
  const endTime = new Date(Date.now())
  endTime.setUTCDate(30)
  endTime.setUTCHours(8)
  endTime.setUTCSeconds(0)
  endTime.setUTCMinutes(0)

  // endTime.setSeconds(27)
  return endTime
}

// 获取当前所处阶段
export const getStage = ()=> {
  
  if (Date.now()<startTime().getTime() && Date.now()<endTime().getTime()) {
    return 0
  }
  if (Date.now() < endTime().getTime()) {
    return 1
  }
  return 0
}

 // 获取下一个阶段时间的秒数
export const getNextStageSec = ()=> {
  const t = getStage() == 0 ? startTime:endTime
  const v =(t().getTime() - Date.now())/1000
  if (v <= 0) {
    return 0
  }
  return v
}
export const debug = () => {
  console.log('sec',getNextStageSec(),'stage', getStage(), startTime().getTime(),endTime().getTime(),Date.now())
}