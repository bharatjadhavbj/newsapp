import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class NewsItem extends Component {
    render() {
        
        let {title,description, imageUrl, newsUrl} = this.props;
        return (
            <>
    <Card className='my-3' style={{ width: '18rem' }}>
      <Card.Img style={{height:'200px', width:'100%',objectFit:'contain', margin:'0'}}  variant="top" src={imageUrl} alt='Image'/>
        <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
            <Button variant="" href={newsUrl} target="_blank" className='btn btn-outline-dark btn-sm'>Read More</Button>
        </Card.Body>
    </Card>
            
            </>
        );
    }
}

export default NewsItem;