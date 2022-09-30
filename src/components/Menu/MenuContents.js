import React from 'react'
import { gql, useQuery } from '@apollo/client';
import account from "../../assets/account.svg"
import searchIcon from "../../assets/search.svg";
import { Link, useNavigate } from 'react-router-dom'

export default function MenuContents({setMenuOpen}) {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(gql`
    {
      allCategory {
        _id,
        title
      }
      allArtist {
        _id,
        name
      }
    }
    `);

    if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

    function handleSubmit(e) {
		e.preventDefault();
    if (e.target[0].value.length === 0) return
    setMenuOpen(false);
		navigate('/products/' + e.target[0].value);
	}

  return (
    <div className='menu-contents'>

          <form className="search-container-menu" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for art..."
            />
            <button type="submit">
              <img src={searchIcon} alt="search" />
            </button>
          </form>

          <h2>Categories</h2>
          <ul className='menu-list'>
            {
              data.allCategory?.map(category => {
                return <li key={category.title}>
                  <p onClick={() => {navigate(`/category/${category._id}`); setMenuOpen(false)}}>{category.title}</p>
                </li>
              })
            }
          </ul>

          <h2>Artists</h2>
          <ul className='menu-list'>
            {
              data.allArtist?.map(artist => {
                return <li key={artist.name}>
                  <p onClick={() => {navigate(`/artist/${artist._id}`); setMenuOpen(false)}}>{artist.name}</p>
                </li>
              })
            }
          </ul>

          <div className="login-container-menu" onClick={() => {navigate("/login"); setMenuOpen(false)}}>
						<p>Login</p>
						<img src={account} alt="account"/>
					</div>

        </div>
  )
}
