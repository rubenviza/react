import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'
import ExercisesHook from '../pages/ExercisesHook'
/*
// Tambien es posible usar "arrow function" de js
const App = () => (
    <BrowserRouter ....
)
*/

function App () {
    return (
        <BrowserRouter>
            <Routes> 
                {/*<Route exact path="/react" element={<Exercises />}/> */} {/* Sin Hooks */}
                <Route exact path="/react" element={<ExercisesHook />}/>               
                <Route exact path="/react/new" element={<ExerciseNew />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App