import React, { useContext, useState, useEffect } from 'react'
import MyContext from '../../context/MyContext'
import './More.css'
import ReactPaginate from 'react-paginate';
import location from '../location-pin.png'
export default function More() {
    const { profiles, setProfiles, searchValue, setSearchValue, filtered, setFiltered } = useContext(MyContext);
    //const [orderArray,setOrderArray]=useState([])
    const [count, setCount] = useState(0)
    console.log(console.log(filtered))
    const handlePageClick = (data) => {
        let a = 4 * data.selected
        setCount(a)

    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    const filterProfile = async() => {
        let results = await profiles.filter(function (item) {
            return item.Name_Surname.toLowerCase().includes(searchValue)
        })
        setFiltered(results)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        filterProfile()
        setCount(0)
    }

    const nameAsc=async ()=>{
      
        let myData= await filtered.sort((a,b)=>{
            return a.Name_Surname.localeCompare(b.Name_Surname);

        });
        setFiltered([...myData])
        console.log(filtered)
    };
    const nameDesc=async ()=>{
       
        let myData= await filtered.sort((a,b)=>{
            return b.Name_Surname.localeCompare(a.Name_Surname);

        });
        console.log(myData)
        setFiltered([...myData])
    }
    const yearAsc= async()=>{
        let myData= await filtered.sort((a,b)=>{
            return b.Date?.localeCompare(a.Date);

        });
        console.log(myData)
        setFiltered([...myData])
    }
    const yearDesc= async()=>{
        let myData= await filtered.sort((a,b)=>{
            return a.Date?.localeCompare(b.Date);

        });
        console.log(myData)
        setFiltered([...myData])
    }
    // useEffect(()=>{
    //     filtered
    // },[nameAsc,nameDesc])
   
    return (
        <div>

            <img src="https://tesodev.github.io/jqueryLite/img/tesodevVector.png" alt="" className='headerImg' />
            <form onSubmit={handleSubmit} id='form'>
                <input type="text" className='searchInput' value={searchValue} onChange={handleChange} />
                <button type='submit' className='searchButton'><p id='searchText'>Search</p></button>
            </form>
            <a type='button' href='/add' className='addNew'><p >Add new record</p></a>
            <div class="dropdown" id='order'>
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id='orderBtn'>
                    Order By
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" href='#' role='button' aria-haspopup='true' aria-expanded='false' onClick={nameAsc}>Name ascending</button>
                    <button class="dropdown-item" href='#' role='button' aria-haspopup='true' aria-expanded='false' onClick={nameDesc}>Name descending</button>
                    <button class="dropdown-item" href='#' role='button' aria-haspopup='true' aria-expanded='false' onClick={yearAsc}>Year ascending</button>
                    <button class="dropdown-item" href='#' role='button' aria-haspopup='true' aria-expanded='false' onClick={yearDesc}>Year descending</button>
                    
                </div>
            </div>

            <div id="content">
                
                    
                       
                                <>
                           
                                <div className='listDiv'>
                                <div>
                                {filtered[count]? <img src={location} alt="" className='locationIcon' /> : ''} 
                                    <p className='listCountry'>{filtered[count]?.Country}</p>
                                    <p className='listCity'>{filtered[count]?.City}</p>
                                    <p className='listEmail'>{filtered[count]?.Name_Surname}</p>
                                    <p className='listDate'>{filtered[count]?.Date}</p>
            
                                </div>{filtered[count] ? <hr className='hr' /> : ''}
                            </div><div className='listDiv'>
                                    <div>
                                    {filtered[count+1]? <img src={location} alt="" className='locationIcon' /> : ''}
                                        <p className='listCountry'>{filtered[count + 1]?.Country}</p>
                                        <p className='listCity'>{filtered[count + 1]?.City}</p>
                                        <p className='listEmail'>{filtered[count + 1]?.Name_Surname}</p>
                                        <p className='listDate'>{filtered[count + 1]?.Date}</p>
                                        
        
                                    </div>{filtered[count + 1] ? <hr className='hr' /> : ''}
                                </div><div className='listDiv'>
                                    <div>
                                    {filtered[count+2]? <img src={location} alt="" className='locationIcon' /> : ''}
                                        <p className='listCountry'>{filtered[count + 2]?.Country}</p>
                                        <p className='listCity'>{filtered[count + 2]?.City}</p>
                                        <p className='listEmail'>{filtered[count + 2]?.Name_Surname}</p>
                                        <p className='listDate'>{filtered[count + 2]?.Date}</p>
        
                                    </div>{filtered[count + 2] ? <hr className='hr' /> : ''}
                                </div><div className='listDiv'>
                                    <div>
                                    {filtered[count+3]? <img src={location} alt="" className='locationIcon' /> : ''}
                                        <p className='listCountry'>{filtered[count + 3]?.Country}</p>
                                        <p className='listCity'>{filtered[count + 3]?.City}</p>
                                        <p className='listEmail'>{filtered[count + 3]?.Name_Surname}</p>
                                        <p className='listDate'>{filtered[count + 3]?.Date}</p>
        
                                    </div>{filtered[count + 3] ? <hr className='hr' /> : ''}
                                </div>
                                </>
                              
                     
                  
                



            </div>
            <ReactPaginate
                containerClassName='pagination justify-content-center'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                previousLabel=" Previous"
                pageCount={Math.ceil(filtered.length / 4)}
                marginPagesDisplayed={5}
                pageRangeDisplayed={5}

            />
         </div>
    )
}

