
export const defaultNamespace = 'ty'

const statePrefix = 'is-'
/**
命名规则如下

  .ElementNm // 表示一个块
  .ElementNm__element //表示块中的一个元素
  .ElementNm-xxx //表示一个后缀
  .ElementNm--state //表示块中的一种样式

  对于布尔开启状态使用 is-xxx 来表示状态

 */
const genBem = (
  block,
  blockSuffix,
  element,
  modifier
) => {

  // 生成basename
  let cls = `${defaultNamespace}-${block}`
  // 生成后缀
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  // 生成元素
  if (element) {
    cls += `__${element}`
  }
  //生成修饰符
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export  default function useNmSpace(blockNm){

  const is =(stateNm,isAddNm=true)=>  isAddNm ? `${statePrefix}${stateNm}` : ''
  
  const b =()=>blockNm && blockNm ? genBem(blockNm) : ''
  const e =(elNm)=> elNm&& elNm? genBem( blockNm, '', elNm):'' 
  const m =(modifierNm)=>modifierNm&& modifierNm? genBem(blockNm,'','',modifierNm):''
  const bem = (blockSuffix,elNm,modifierNm)=>genBem(blockNm,blockSuffix,elNm,modifierNm)

  return {
    is,
    b,
    e,
    m,
    bem
  }
}