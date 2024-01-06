import { Provider } from "react-redux"
import { store } from "./states"
import RepoList from "./components/RepoList"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>npm-search</h1>
        <RepoList/>
      </div>
    </Provider>
  )
}

export default App