import NavbarElem from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import Data from "./Data";

function App() {
  // <Hero />
  const cards = Data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <NavbarElem />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
