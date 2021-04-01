
//const list = [
//	{
//		"id":1,
//		"title":"1st todo",
//		"body":"Learn Django properly."
//	},
//	{
//		"id":2,
//		"title":"Second item",
//		"body":"Learn Python."
//	},
//	{
//		"id":3,
//		"title":"Learn HTTP",
//		"body":"It's important."
//	}
//];

class App extends React.Component	 {
	//constructor (props) {
	//	super(props);
	//	this.state = { list };
	//}
	state = {
		todos: []
	};
	
	componentDidMount() {
		this.getTodos();
	}
	
	getTodos() {
		fetch('http://127.0.0.1:8000/api/')
		.then(res => {
			this.setState({ todos: res.data });
		})
		.catch(err => {
			console.log(err);
		});
	}
	
	render () {
		return (React.createElement('div', null, this.state.todos.map(item => (
						React.createElement('div', {key: item.id},
							React.createElement('h1', null, item.title),
							React.createElement('p', null, item.body)
						)
					)
					)
				)
				)		
	}
};


ReactDOM.render (
	React.createElement(App, null),
	document.getElementById('app')
)
