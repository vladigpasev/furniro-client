export const MosaicSection = () => {
    return (
      <section className="mosaic">
        <div className="mosaic-info">
          <span>Share your setup with</span>
          <h1>#FuniroFurniture</h1>
        </div>
        <div className="mosaic-images">
          <div className="first-column">
            <div className="first-row">
              <img src="/first.svg" alt="image" />
              <img src="/second.svg" alt="image" />
            </div>
            <div className="second-row">
              <img src="/third.svg" alt="image" />
              <img src="/fourth.svg" alt="image" />
            </div>
          </div>
          <div className="second-column">
            <img src="/fifth.svg" alt="image" />
          </div>
          <div className="third-column">
            <div className="third-row">
              <img src="/sixth.svg" alt="image" />
              <img src="/seventh.svg" alt="image" />
            </div>
            <div className="fourth-row">
              <img src="/eighth.svg" alt="image" />
              <img src="/ninth.svg" alt="image" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  