export default function AboutUs() {
  return (
    <div className="page-container about-page">
      <section className="about-card">
        <p className="section-label">ABOUT US</p>
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Paradise Nursery is a friendly online plant shop created for people
          who want to bring more greenery into their homes and workspaces.
        </p>

        <p>
          We offer a collection of indoor plants that are easy to care for,
          attractive and suitable for different spaces. Our goal is to make
          choosing and buying plants simple for everyone.
        </p>

        <div className="about-grid">
          <div>
            <h3>🌱 Healthy Plants</h3>
            <p>Carefully selected plants for your home and office.</p>
          </div>
          <div>
            <h3>💚 Simple Shopping</h3>
            <p>Browse plants, add them to your cart and manage quantities.</p>
          </div>
          <div>
            <h3>🏡 Greener Homes</h3>
            <p>We help you create a fresh and peaceful living space.</p>
          </div>
        </div>
      </section>
    </div>
  );
}