
import React, {useState, useRef} from 'react'
function InputSample () {

  const [inputs, setInputs] = useState({
    name:'',
    nickname:''
  })

  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const {value, name} = e.target;
    setInputs({
        ...inputs,
        [name]: value
    });
  };

  const onReset = () => {
    setInputs({
        name:'',
        nickname:''
    })
    nameInput.current.focus();
  }


  return (
    <div>
        <input name='name' onChange={onChange} placeholder='이름' value={name} ref={nameInput}/>
        <input name='nickname' onChange={onChange} placeholder='닉네임' value={nickname}/>
        <button onClick={onReset}> 초기화 </button>
        <div>
            <b>값: {name}({nickname}) </b>
        </div>
    </div>
  )

}

export default InputSample;