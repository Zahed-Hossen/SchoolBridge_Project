import { useEffect, useState } from 'react';
import styled from 'styled-components';
import StudentLayout from '../../components/Student/StudentLayout';

const LibraryContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const LibraryHeader = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0f2f42;
`;

const LibraryFilters = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const BookCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const BookTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0f2f42;
`;

const BookAuthor = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  color: #555;
`;

const BookDetails = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  color: #555;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalTitle = styled.h2`
  margin-bottom: 15px;
  color: #0f2f42;
`;

const ModalText = styled.p`
  margin: 10px 0;
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #0f2f42;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #184c68;
  }
`;

const Library = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    author: '',
    genre: '',
  });
  const [selectedBook, setSelectedBook] = useState(null);
  // Fetch the book data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/library/books',
          {
            withCredentials: true,
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);

        const uniqueCategories = [
          ...new Set(data.map((book) => book.category)),
        ];
        const uniqueAuthors = [...new Set(data.map((book) => book.author))];
        const uniqueGenres = [...new Set(data.map((book) => book.genre))];
        setCategories(uniqueCategories);
        setAuthors(uniqueAuthors);
        setGenres(uniqueGenres);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    let filtered = books;

    if (searchTerm) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (filters.category) {
      filtered = filtered.filter((book) => book.category === filters.category);
    }

    if (filters.author) {
      filtered = filtered.filter((book) => book.author === filters.author);
    }

    if (filters.genre) {
      filtered = filtered.filter((book) => book.genre === filters.genre);
    }

    setFilteredBooks(filtered);
  }, [searchTerm, filters, books]);

  return (
    <>
      <StudentLayout>
        <LibraryContainer>
          <LibraryHeader>Library</LibraryHeader>
          <LibraryFilters>
            <Select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <Select
              value={filters.author}
              onChange={(e) =>
                setFilters({ ...filters, author: e.target.value })
              }
            >
              <option value="">All Authors</option>
              {authors.map((author, index) => (
                <option key={index} value={author}>
                  {author}
                </option>
              ))}
            </Select>
            <Select
              value={filters.genre}
              onChange={(e) =>
                setFilters({ ...filters, genre: e.target.value })
              }
            >
              <option value="">All Genres</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </Select>
            <SearchInput
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </LibraryFilters>
          <p>No books found.</p>
          <BookList>
            {filteredBooks.map((book) => (
              <BookCard key={book.id} onClick={() => setSelectedBook(book)}>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
                <BookDetails>
                  {book.category} - {book.genre}
                </BookDetails>
              </BookCard>
            ))}
          </BookList>

          {selectedBook && (
            <ModalOverlay>
              <ModalContent>
                <ModalTitle>{selectedBook.title}</ModalTitle>
                <ModalText>Author: {selectedBook.author}</ModalText>
                <ModalText>Category: {selectedBook.category}</ModalText>
                <ModalText>Genre: {selectedBook.genre}</ModalText>
                <ModalText>{selectedBook.description}</ModalText>
                <CloseButton onClick={() => setSelectedBook(null)}>
                  Close
                </CloseButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </LibraryContainer>
      </StudentLayout>
    </>
  );
};

export default Library;
