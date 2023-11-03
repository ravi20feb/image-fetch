import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './image.css';
import { Box, InputBase } from '@mui/material';

import { Button } from '@mui/material';
import { Stack } from '@mui/material';

export default function Image(props) {
  console.log(props);
  const [image, setImages] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const arr = ['nature', 'kedarnath', 'ganga', 'kashi'];
  const searchRef = useRef(null);
  const API_URL = 'https://api.unsplash.com/search/photos';

  // eslint-disable-next-line no-undef
  console.log(process.env.REACT_APP_SECRET_NAME);
  const fetchImages = async (param) => {
    const value = param.value ? param.value : param;
    try {
      console.log(param);
      // eslint-disable-next-line no-undef
      const { data } = await axios.get(`${API_URL}?query=${value}&page=${page}&per_page=${20}&client_id=${process.env.REACT_APP_SECRET_NAME}`);
      console.log(data);
      console.log(data.total_pages);
      setTotalPages(data.total_pages);
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(page);
  const handleSearch = () => {
    setPages(1);
    const current = searchRef.current.querySelector('input');
    console.log(current);
    fetchImages(current);
  };
  function handleTextSearch(e) {
    setPages(1);
    const current1 = searchRef.current.querySelector('input');
    current1.value = e.target.innerText;
    fetchImages(e.target.innerText);

    console.log(e);
  }

  useEffect(() => {
    const current = searchRef.current.querySelector('input');
    fetchImages(current);
  }, [page]);
  return (
    <div className="hero-image-fetch-wrapper " style={{ color: '#000' }}>
      <div className="images-content-wrapper">
        <div className="logo-search-wrapper">
          <div className="logo-search-content-wrapper" style={{ color: '#000' }}>
            <Box component={'div'} sx={{ fontSize: 'clamp(5rem,10vw,15vw)', textAlign: 'center' }}>
              {'<DEV/>'}
            </Box>
            <div className="searchWrapper" style={{ color: '#000', borderColor: '#000' }}>
              <InputBase placeholder="search image" sx={{ flex: 1, borderColor: '#000', color: '#000' }} ref={searchRef}></InputBase>
              <Button
                onClick={handleSearch}
                sx={{
                  border: '1px solid black',
                  minWidth: '3rem',
                  maxWidth: '7rem',
                  fontSize: 'clamp(10px,3vw, 1rem)',
                  color: '#000',
                  borderColor: '#000',
                  margin: '5px',
                }}
              >
                search
              </Button>
            </div>
            <Stack direction="row" spacing={2} sx={{ marginTop: '.5rem' }}>
              {arr.map((item) => (
                <Button
                  key={item}
                  sx={{
                    border: '1px solid black',
                    minWidth: '3rem',
                    maxWidth: '7rem',
                    fontSize: 'clamp(10px,3vw, 1rem)',
                    color: '#000',
                    borderColor: '#000',
                  }}
                  onClick={handleTextSearch}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </div>
        </div>

        <div className="images-listing-wrapper">
          {image.map((image) => (
            <div key={image.id} className="image-wrapper">
              <img src={image.urls.small_s3} width={270} height={230} alt={image.alt_description} />
            </div>
          ))}
        </div>

        {totalPages > 0 && (
          <div className="button-wrapper">
            <Button
              sx={{
                border: '1px solid black',
                minWidth: '6rem',
                color: '#000',
                borderColor: '#000',
              }}
              disabled={page > 1 ? false : true}
              onClick={() => setPages(page - 1)}
            >
              previous
            </Button>
            <Button
              sx={{
                border: '1px solid black',
                minWidth: '6rem',
                color: '#000',
                borderColor: '#000',
              }}
              onClick={() => {
                setPages(page + 1);
              }}
            >
              next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
