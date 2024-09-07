export const CategorySection = () => {
    return (
      <section className="category">
        <div className="info">
          <div className="top-text">
            <h1 className="browse">Browse The Range</h1>
            <h3 className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>
          <div className="categories">
            <div className="category">
              <img className="category-image" src="/dining.svg" alt="dining" />
              <h2 className="category-name">Dining</h2>
            </div>
            <div className="category">
              <img className="category-image" src="/living.svg" alt="living" />
              <h2 className="category-name">Living</h2>
            </div>
            <div className="category">
              <img className="category-image" src="/bedroom.svg" alt="bedroom" />
              <h2 className="category-name">Bedroom</h2>
            </div>
          </div>
        </div>
      </section>
    );
  };
  