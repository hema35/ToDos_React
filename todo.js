function Todo({todo,index,remove}){
    function handle(){
      console.log('Ping:',index);
      remove(index);
    }
    return <div className="todo" >{todo.text}<span onClick={handle} className="close">x</span></div>
  }
  