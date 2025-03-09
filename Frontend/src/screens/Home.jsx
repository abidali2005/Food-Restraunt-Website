import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Caraousel from '../components/Caraousel'
import Card from '../components/Card'

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/data/displaydata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    response = await response.json();
    setFoodItems(response.data);
    setFoodCat(response.catData);
  }

  useEffect(() => {
    loadData();
  }, [])

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ maxHeight: "80vh" }} // Ensures a max height for the carousel
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "9" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2 w-75 bg-white text-dark"
                type="search"
                placeholder="Type in..."
                aria-label="Search" value={search} onChange={onChange}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="./images/food-1.jpg"
              className="d-block w-100"
              style={{
                height: "80vh", // Set a fixed height
                objectFit: "cover", // Ensures the image fully covers the area
                filter: "brightness(30%)",
              }}
              alt="Food 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/food-2.jpg"
              className="d-block w-100"
              style={{
                height: "80vh",
                objectFit: "cover",
                filter: "brightness(30%)",
              }}
              alt="Food 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/food-3.jpg"
              className="d-block w-100"
              style={{
                height: "80vh",
                objectFit: "cover",
                filter: "brightness(30%)",
              }}
              alt="Food 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container'>
        {
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (
                <div key={data._id} className='row mb-3'>
                  <div className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItems.length > 0 ? foodItems.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} img={filterItems.img} ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )
            })
            : ""
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home





