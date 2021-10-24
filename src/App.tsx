import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { TodoList } from "./pages/TodoList";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={TodoList} />
			</Switch>
		</Router>
	);
}

export default App;
