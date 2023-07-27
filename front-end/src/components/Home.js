import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Library</h2>
      <quote>
      "Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore and achieve, and contribute to improving our quality of life."
      </quote>
      <p>
        As an admin, you can add books and manage library members. Regular users can request books
        from the library.
      </p>
    </div>
  );
};

export default Home;
