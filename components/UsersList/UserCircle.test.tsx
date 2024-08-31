import { render, screen, fireEvent } from '@testing-library/react';
import { UserStory } from '@/assets/stories';
import '@testing-library/jest-dom';
import React from 'react';
import UserCircle from './UserCircle';

describe('UserCircle', () => {
    const user: UserStory = { userId: 'John Doe', stories: [{ url: 'https://example.com/story1.jpg' }] };
    const onClick = jest.fn();

    it('renders the user image', () => {
        render(<UserCircle user={user} onClick={onClick} />);
        const image = screen.getByAltText('John Doe');
        expect(image).toBeInTheDocument();
    });

    it('calls onClick with the user when clicked', () => {
        render(<UserCircle user={user} onClick={onClick} />);
        fireEvent.click(screen.getByRole('img'));
        expect(onClick).toHaveBeenCalledWith(user);
    });
});