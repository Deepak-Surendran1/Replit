import './Home.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Card, FormField, Loader } from '../components';
export default function Home() {
  const [allPosts, setAllPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('Hi');
  return (
    <section className='container'>
      <div>
        <h1 className='header-text'>The Community Showcase</h1>
      </div>
      <p>Browse through a collection of images created with DALL-E AI</p>
      <div>
        <FormField />
      </div>
      <div>
        {loading ? (
          <div className='loading'>
            <Loader />
          </div>
        ) : (<>
          {searchText &&
            <div>
              {searchText}
            </div>

          }
        </>
        )}
      </div>
    </section>

  )
}
