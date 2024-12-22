import ToDo from '../models/ToDoList.js';

export async function createToDo(req, res) {
	try {
		const data = req.body;
		const todo = new ToDo(data);
		const result = await todo.save();
		console.log(result);
		res.status(201).send({ message: 'Created New Task!' });
	} catch (err) {
		console.error(err);
		res.status(400).send(err);
	}
}

export async function getAllToDo(req, res) {
	const { userId } = req.params;

	try {
		const result = await ToDo.find({ createdBy: userId });
		res.send(result);
	} catch (err) {
		console.error(err);
		res.status(400).send(err);
	}
}

export async function updateToDo(req, res) {
	try {
		const { id } = req.params;
		const data = req.body;
		const result = await ToDo.findByIdAndUpdate(
			id,
			{ $set: data },
			{ returnOriginal: false } // Use `new: true` if working with Mongoose 6+
		);
		console.log(result);
		res.send({ message: 'ToDo list Updated!' });
	} catch (err) {
		console.error(err);
		res.status(400).send(err);
	}
}

export async function deleteToDo(req, res) {
	try {
		const { id } = req.params;
		const result = await ToDo.findByIdAndDelete(id);
		console.log(result);
		res.send({ message: 'ToDo Task Deleted!' });
	} catch (err) {
		console.error(err);
		res.status(400).send(err);
	}
}
