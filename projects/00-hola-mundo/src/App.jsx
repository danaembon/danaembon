import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users =[
    {
        userName: "gordameir",
        name: "Ceci Denot",
        isFollowing: true
    },
    {
        userName: "ElGatoYLaCaja",
        name: "El Gato Y La Caja",
        isFollowing: true
    },
    {
        userName: "avia_lev",
        name: "Avia Levi",
        isFollowing: false
    },
]   
export function App() {
    return ( 
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    
                     <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}; 