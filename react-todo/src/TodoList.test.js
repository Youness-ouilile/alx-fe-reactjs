import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  // Test initial render and todos
  it('renders TodoList with initial todos', () => {
    render(<TodoList />);

    // Check that the initial todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
  });

  // Test adding a new todo
  it('can add a new todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('New todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Check if the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test toggling a todo
  it('can toggle the completion state of a todo', () => {
    render(<TodoList />);

    const todo = screen.getByText('Learn React');
    fireEvent.click(todo); // Toggle the completion state

    // Check if the text decoration has changed (line-through)
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Toggle again to uncomplete
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  // Test deleting a todo
  it('can delete a todo', () => {
    render(<TodoList />);

    const todo = screen.getByText('Learn React');
    const deleteButton = todo.nextElementSibling; // Assuming the delete button is next to the todo text

    fireEvent.click(deleteButton); // Delete the todo

    // Check if the todo is removed from the list
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});