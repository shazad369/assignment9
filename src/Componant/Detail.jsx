
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useParams } from 'react-router';
import { use, useEffect, useState } from 'react';

const plantdetail = fetch("/Plants.json")
.then(res=>res.json())
.then(data=>data)

const Detail = () => {
  const data =use(plantdetail);
  const {id}=useParams();

   const [news,setNews]=useState([])
    
useEffect(()=>{

  const newsdetail=data.find(singlenews=>singlenews.plantId==id)
  

setNews(newsdetail)


},[data,id])

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className='w-129'>
              <Link to="/">   <button className='text-2xl font-bold text-black'>  Back  TO Home </button></Link>

<div class="card bg-base-100 w-300 shadow-sm">
  <div>
    <img className='w-200 h-160'
      src={news.image}
      alt="Shoes" />
  </div>
  <div class="card-body">
    <h2 class="card-title">
       Plant Name
      {news.plantName}
      <div class="badge badge-secondary"> <span class="font-bold ">  Category</span> :{news.category}</div>
    </h2>
    <p> <span class="font-bold ">  Description</span>: {news.description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline"></div>
      <div class="badge badge-outline"> <span class="font-bold ">  Price</span>:{news.price}</div>
    </div>
    <h4><span class="font-bold ">Care tips</span> {news.careTips}</h4>
    <h1><span class="font-bold ">  Provider Name</span>:{news.providerName}</h1>
  </div>
</div>


            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Detail;