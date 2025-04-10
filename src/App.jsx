import './App.css';
import reactLogo from './assets/react.svg';
import DestinationCard from './components/DestinationCard';

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with beautiful beaches and vibrant culture",
    price: "$1,200"
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of love, art, and exquisite cuisine",
    price: "$1,500"
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>Explore Destinations 🧳</h1>
      </header>

      <div className="cards-grid">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
