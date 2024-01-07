import { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const RepoList:React.FC = () => {
    const [term, setTerm] = useState('')

    const {searchRepositories} = useActions()

    const {data,error,loading} = useTypedSelector((state)=>state.repo)

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchRepositories(term)
    }

  return (
    <div>
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text" onChange={(e)=>setTerm(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name)=><div key={name}
            style = {{backgroundColor:'blue',height:'60px',width:'200px',margin:'10px',color:'white',textAlign:'center'}}        
        >{name}</div>)}
    </div>
  )
}

export default RepoList