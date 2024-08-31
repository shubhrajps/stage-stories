import React from 'react';
import { render, screen } from '@testing-library/react';
import StoryViewer from './StoryViewer';
import { StoryContext } from '../Context/StoryContext';
import { UserStory } from '@/assets/stories';
import '@testing-library/jest-dom';

describe('StoryViewer', () => {
    const selectedUser: UserStory = {
        userId: 'John Doe',
        stories: [{ url: 'https://example.com/story1.jpg' }, { url: 'https://example.com/story2.jpg' }],
    };
    const provideValue = {
        selectedUser,
        setSelectedUser: jest.fn(),
        setAllUserStories: jest.fn(),
        allUserStories: [selectedUser],
    };

    it('renders the StoryHeader component', () => {
        render(
            <StoryContext.Provider value={provideValue}>
                <StoryViewer />
            </StoryContext.Provider>
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders the Stories correctly', () => {
        render(
            <StoryContext.Provider value={provideValue}>
                <StoryViewer />
            </StoryContext.Provider>
        );
        expect(screen.getByTestId('stories')).toBeInTheDocument();
    });
});