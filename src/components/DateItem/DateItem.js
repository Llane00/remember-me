import {useContext} from 'react';
import Context from '../../Context'

function DateItem() {
  const {state, dispatch} = useContext(Context)
  const onClick = () => {
    dispatch({type: 'add', number: 1});
  }

  // useEffect(() => {
  //   请求当前用户的信息列表
  //   return () => {
  //     cleanup
  //   }
  // }, [])

  console.log("rend", state)

  return (
    <div>
      <h1>{state.n}</h1>
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default DateItem;