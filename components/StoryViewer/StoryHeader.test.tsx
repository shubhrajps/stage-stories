import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoryHeader from './StoryHeader';
import { StoryContext } from '../Context/StoryContext';
import '@testing-library/jest-dom';
import { UserStory } from '@/assets/stories';

describe('StoryHeader', () => {
    const selectedUser: UserStory = { userId: 'John Doe', stories: [] };
    const provideValue = {
        selectedUser: selectedUser, 
        setSelectedUser: jest.fn(),
        setAllUserStories: jest.fn(),
        allUserStories: [],
    };

    it('renders the user icon and name', () => {
        render(
        <StoryContext.Provider value={provideValue}>
            <StoryHeader />
        </StoryContext.Provider>
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByTestId('user-icon')).toBeInTheDocument();
        expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    });

    it('calls setSelectedUser when the close button is clicked', () => {
        render(
        <StoryContext.Provider value={provideValue}>
            <StoryHeader />
        </StoryContext.Provider>
        );

        fireEvent.click(screen.getByTestId('close-icon'));
        expect(provideValue.setSelectedUser).toHaveBeenCalledWith(null);
    });
});