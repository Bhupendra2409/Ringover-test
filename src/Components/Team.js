import React from 'react'
import './styles/team.css'
import team from '../asset/team'
import TeamBanner from './TeamBanner'

export default function Team() {
  
  return (
    <div className='team-cnt'>
      <div className="team-title-text fs-l fw-b">
        Without bonding and Coordination, every project is a failure. Look at who makes KICKSUP great!
      </div>
      <div className="team-grid">
          {team.map((person)=>{
            return <TeamBanner person={person}/>
          })}
      </div>
      <div className="team-title-text fs-l fw-b">
        and you!
      </div>
    </div>
  )
}
