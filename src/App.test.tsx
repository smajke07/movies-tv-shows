import { render, screen } from '@testing-library/react';
import { Search } from './components/Search';
import { Tabs } from './components/Tabs';
import { List } from './components/List';
import { Card } from './components/Card';
import { Details } from './components/Details';

test('Renders two Tabs with tabs with Text Movies and TV Shows', () => {
  render(<Tabs selectedTab="movie" setSelectedTab={() => {}} />);

  const tabElement1 = screen.getByText("Movies");
  expect(tabElement1).toBeInTheDocument();
  
  const tabElement2 = screen.getByText("TV Shows");
  expect(tabElement2).toBeInTheDocument();
});

test('Renders Tabs component with two buttons: one "TV shows" with "active" class, the other "Movies" without the "active" class', () => {
  render(<Tabs selectedTab="tv" setSelectedTab={() => {}} />);

  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(2);

  const buttonWithActiveClass = buttons.find(button => 
    button.textContent === "TV Shows" &&
    button.classList.contains("active")
   );
  expect(buttonWithActiveClass).toBeInTheDocument();

  const buttonWithoutActiveClass = buttons.find(button =>
    button.textContent === "Movies" &&
    !button.classList.contains("active")
  );
  expect(buttonWithoutActiveClass).toBeInTheDocument();
});

test('Renders Search component with input element with placholder text "Search" and value "The"', () => {
  render(<Search query="The" />);
  
  const inputElement = screen.getByPlaceholderText('Search');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue('The');
});

test('Renders List component with text "No movies match the search"', () => {
  render(<List selectedTab="movie" data={{ movies: [], tvShows: [] }} setDetailsData={() => {}} />);
  
  const tabElement1 = screen.getByText("No movies match the search");
  expect(tabElement1).toBeInTheDocument();
});

test('Renders List component with text "No TV shows match the search"', () => {
  render(<List selectedTab="tv" data={{ movies: [], tvShows: [] }} setDetailsData={() => {}} />);
  
  const tabElement1 = screen.getByText("No TV shows match the search");
  expect(tabElement1).toBeInTheDocument();
});

test('Renders Details component with overview text "This is an overview"', () => {
  render(<Details type="movie" title='This is a title' overview='This is an overview' />);

  const pElement = screen.getByText("This is an overview");
  expect(pElement).toBeInTheDocument();
});

test('Renders Card component with title "This is a title"', () => {
  render(<Card title='This is a title' />);
  
  const h2Element = screen.getByText("This is a title");
  expect(h2Element).toBeInTheDocument();
});

test('Renders Card component with image alt set to "This is an image alt"', () => {
  render(<Card title='This is a title' imageAlt='This is an image alt' />);

  const imgElement = screen.getByAltText("This is an image alt");
  expect(imgElement).toBeInTheDocument();
});
