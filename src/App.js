function App() {
  
  const categories = [
    {
      id:0,
      title:"jacket"
    },
    {
      id:1,
      title:"snikers"
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((c) => (
        <div className="category-container">
          <div className="background-image"/>
          <div className="catefory-body-container">
            <h2>{c.title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
