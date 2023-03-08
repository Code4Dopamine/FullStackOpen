import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const MostVotes = (props) => {
  if (props.mostVotedAnectode === "") {
    return (
      <p>No votes has been made on any anecdotes</p>
    )
  } else {
    return (
      <>
        <p>{props.mostVotedAnectode}</p>
        <div className="divider"></div>
        <p>has {props.votes[props.mostVotedAnectode]} votes</p>
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({}); //Stores Objects of this format {'<anecdotes>': '<#ofVotes>'}
  
  const [maxVoteAnecdote, setMaxVoteAnecdote] = useState("")
  let maxVoteCount = 0;


  const handleVote = (anecdote,highestVote) => {

    setVotes((prevVotes) => {
      const updatedVotes = { ...prevVotes };
      updatedVotes[anecdote] = (prevVotes[anecdote] || 0) + 1;

      // Initial Max Vote setup
      if(highestVote === ""){
        setMaxVoteAnecdote(anecdote)
      }
      // Update "Anecdote with most votes"
      if(updatedVotes[anecdote] > updatedVotes[highestVote]){
        setMaxVoteAnecdote(anecdote)
        console.log("NewMax:",updatedVotes[anecdote])
      }

      return updatedVotes;
    });
  };

  // console.log(votes)
  // console.log(votes[selected])
  // console.log("maxVoteAnecdote:")
  // console.log(maxVoteAnecdote)


  return (
    <div className=''>
      <div>
        <h1 className='py-5'>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <div className="divider"></div>
        <p>has {votes[anecdotes[selected]] || 0} votes</p>
      </div>
      <div className='py-5'>
        <button className='btn btn-outline' onClick={() => handleVote(anecdotes[selected],maxVoteAnecdote)}>vote</button>
        <button className='btn btn-ghost btn-active' onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>next anecdote</button>

      </div>

      <div>
        <h1 className='py-5'>Anecdote with most votes</h1>
        <MostVotes mostVotedAnectode={maxVoteAnecdote} votes={votes}/>
      </div>      

    </div>
  )
}

export default App
