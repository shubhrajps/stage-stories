import React from 'react'
import { StoryProvider } from './Context/StoryContext'
import UserStories from './UserStories/UserStories'

export default function StageStories() {
  return (
    <StoryProvider>
        <UserStories />
    </StoryProvider>
  )
}
