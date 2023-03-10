import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews);
  return (
    <>
        {
          <><Button variant='dark'
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
              >
                  Reviwes
              </Button><Collapse in={open}>
                      <div id="example-collapse-text">
                          {
                            reviews.map(item=>(
                                <>
                                    <p>{item.name} <span>{item.date}</span></p>
                                    <h3>Rating:{item.rating}</h3>
                                    <h5>{item.name}</h5>
                                    <h6>Comments: {item.comments}</h6>
                                </>
                            ))
                          }
                      </div>
                  </Collapse></>
        }
    </>
  )
}

export default Restreview