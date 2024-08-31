import React from 'react'
import { StoryProvider } from './StoryContext'
import UserStories from './UserStories'

export default function StageStories() {
  return (
    <StoryProvider>
        <UserStories />
    </StoryProvider>
  )
}
