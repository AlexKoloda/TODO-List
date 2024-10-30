



const TodoItem = ({tasks, setTasks}) => {

    console.log(tasks)
    
    const handleClickDelete = (id) => {
        setTasks(tasks.filter((e) => e !== tasks.id ));
      };
      const handleClickComplete = (id) => {
        console.log('TODO Сделать текст зачеркунтым');
      };


    return(
         tasks.map((task) => (
        
        <li className="main__item" key={task.id}>
        <div
        className="main__checkbox"
        onClick={() => handleClickComplete(task.id)}
        ></div>
          {task.text}
          <button
            className="main__delete"
            type="submit"
            onClick={() => handleClickDelete(task.id)}
          >
            x
          </button>
        </li>

      )) 
    )
}






export default TodoItem;