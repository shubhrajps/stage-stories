import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserStories from './UserStories';
import { StoryContext } from '../Context/StoryContext';
import '@testing-library/jest-dom';
import { UserStory } from '@/assets/stories';

const mockSetSelectedUser = jest.fn();

const mockContextValue = {
  selectedUser: null, 
  setSelectedUser: mockSetSelectedUser,
  allUserStories: [],
  setAllUserStories: jest.fn(),
};

describe('UserStories', () => {
  beforeEach(() => {
    window.innerWidth = 800; 
    window.dispatchEvent(new Event('resize'));
  });

  it('renders UserCircleList when no user is selected and is mobile', () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    render(
      <StoryContext.Provider value={mockContextValue}>
        <UserStories />
      </StoryContext.Provider>
    );

    expect(screen.getByTestId('title')).toBeInTheDocument(); 
    expect(screen.getByText('STAGE')).toBeInTheDocument(); 
  });

  it('renders StoryViewer when a user is selected and is mobile', () => {
    const mockUser: UserStory = {
        userId: 'John Doe',
        stories: [{ url: 'https://example.com/story1.jpg' }, { url: 'https://example.com/story2.jpg' }],
    };
    const contextValueWithUser = {
      selectedUser: mockUser,
      setSelectedUser: mockSetSelectedUser,
      allUserStories: [mockUser],
        setAllUserStories: jest.fn(),
    };

    window.innerWidth = 500; 
    window.dispatchEvent(new Event('resize'));

    render(
      <StoryContext.Provider value={contextValueWithUser}>
        <UserStories />
      </StoryContext.Provider>
    );

    expect(screen.queryByText('STAGE')).not.toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders message when not in mobile view', () => {
    render(
      <StoryContext.Provider value={mockContextValue}>
        <UserStories />
      </StoryContext.Provider>
    );

    expect(screen.getByText('Stories are not available on desktop')).toBeInTheDocument(); 
  });
});