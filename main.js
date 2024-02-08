const taskList = [
	{
		id:1,
		title:'Сходить в магазин',
		body:'Купить хлеб'
	},
	{
		id:2,
		title:'Спорт',
		body:'Сходить в  тренажер'
	},
	{
		id:3,
		title:'Учеба',
		body:'Посетить курс по Swift'
	}
];

const todoList = document.querySelector('.todo__list');


function getTasksList (tasks) {
	const objOfTasks = tasks.reduce((acc, item)=>{
		acc[item.id] = item;
		return acc;
	}, {});
	const arrOfTasks = Object.values(objOfTasks);

	let templateListItem = '';
    
	arrOfTasks.forEach((item)=>{
		templateListItem += createTaskItem(item);
	});
	todoList.insertAdjacentHTML('afterbegin', templateListItem);



   
}

getTasksList(taskList);

function createTaskItem (task) {
	const taskItem = `
    <li class="todo__list__item">
        <div class="list__item__desc">
            <h3>${task.title}</h3>
            <p>${task.body}</p>
        </div>
        <div class="list__item__btns">
            <div class="btns__important">
                <img src="images/icons8-important-30.png" alt="">
            </div>
            <div class="btns__delete">
                <img src="images/icons8-delete-30.png" alt="">
            </div>
        </div>
    </li>
    `;
	return taskItem;

}
