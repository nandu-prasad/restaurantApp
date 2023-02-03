import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>At Kalzbrgr, <br/> we pour our hearts into giving flavor its soul.</Card.Title>
                    <Card.Text>
                        As a savory ingredient specialist for foodservice and food manufacturers, 
                        we offer premium soup bases, sauces, gravies and seasonings that provide rich foundational flavors,
                        <br/> 
                        allowing you to craft signature dishes that rouse the passions of today’s food lovers.
                        <br/> 
                        Ready to stir up something special?
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer