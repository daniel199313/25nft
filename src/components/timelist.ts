
// 活动开始时间
const startTime = new Date(Date.now())
startTime.setMonth(5)
startTime.setDate(15)
startTime.setHours(0)
startTime.setSeconds(0)
startTime.setMinutes(0)

const endTime = new Date(Date.now())
endTime.setMonth(5)
endTime.setDate(15)
endTime.setHours(2)
endTime.setSeconds(0)
endTime.setMinutes(0)

// 获取当前所处阶段
export const getStage = ()=> {
  
  if (Date.now()-startTime.getTime() < 0) {
    return 0
  } else if (Date.now() - endTime.getTime() < 0) {
    return 1
  } else {
    return 2
  }
}

 // 获取下一个阶段时间的秒数
export const getNextStageSec = ()=> {
  const t = getStage() == 0 ? startTime:endTime
  const v =(t.getTime() - Date.now())/1000
  if (v <= 0) {
    return 0
  }
  return v
}
export const debug = () => {
  const start = startTime.getTime()
  const end = endTime.getTime()
  console.log('sec',getNextStageSec(),'stage', getStage(), start/1000,end/1000,Date.now()/1000)
}