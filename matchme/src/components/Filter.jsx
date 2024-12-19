import React, { useState, useEffect } from 'react';
const url = 'https://jsonplaceholder.typicode.com/posts';
const FilterComponent = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const lowerCaseFilter = filter.toLowerCase();
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(lowerCaseFilter)
      )
    );
    setFilteredData(filtered);
  }, [filter, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter data..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
       {
        filteredData.map((ele,i)=>{
          return (
            
            <div key={ele.id}>
            <p><b>Title:</b>{ele.title}</p>
            <p><b>Body:</b>{ele.body}</p>
            </div>
            
          )
        })
       }
        
      </ul>
    </div>
  );
};

export default FilterComponent;
