import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserCircleList from './UserCircleList';
import { StoryContext } from '../Context/StoryContext';
import { UserStory } from '@/assets/stories';
import '@testing-library/jest-dom';

describe('UserCircleList', () => {

    const user1: UserStory = { userId: 'John Doe', stories: [{ url: 'https://example.com/story1.jpg' }] };
    const user2: UserStory = { userId: 'Jane Smith', stories: [ { url: 'https://example.com/story2.jpg' }] };
    const allUserStories = [user1, user2];
    const setSelectedUser = jest.fn();
    const provideValue = {
        selectedUser: null,
        setSelectedUser,
        setAllUserStories: jest.fn(),
        allUserStories: [user1, user2],
    };

    it('renders a UserCircle for each user in allUserStories', () => {
        render(
            <StoryContext.Provider value={provideValue}>
                <UserCircleList />
            </StoryContext.Provider>
        );

        expect(screen.getAllByTestId('user-circle')).toHaveLength(allUserStories.length);
    });

    it('calls setSelectedUser with the user when a UserCircle is clicked', () => {
        render(
            <StoryContext.Provider value={provideValue}>
                <UserCircleList />
            </StoryContext.Provider>
        );

        fireEvent.click(screen.getByAltText('John Doe'));
        expect(setSelectedUser).toHaveBeenCalledWith(user1);
    });
});