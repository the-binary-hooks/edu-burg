// React Bootstrap
// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// CSS
import "./Posts.css";


const Posts = () => {

    const id = sessionStorage.getItem("_id");
    console.log('outer load')
    useEffect (() => {
        console.log('loading')
        fetch("http://localhost:5000/api/post/getPost", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {console.log(err)})
    },[id])

    return (
        <Card className="card">
            <Row>
                <div className="col-4 col-md-2">
                    <div className="profile-img">John</div>
                </div>
                <div className="col-8 col-sm-6">
                    {console.log('inner')}
                    <h4>John Doe================</h4>
                    <small>18 July 2021</small>
                </div>
            </Row>
            <Card.Body>
                <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                </Card.Text>
            </Card.Body>
            <Button className="post-button brand-button">Like</Button>
            <Form.Control type="text" placeholder="Write A Comment" />
            <Card className="comment">
                <Row>
                    <div className="col-4 col-md-2">
                        <div className="profile-img">John</div>
                    </div>
                    <div className="col-8 col-sm-6">
                        <h4>John Doe</h4>
                        <small>18 July 2021</small>
                    </div>
                </Row>
                <Card.Body>
                    <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </Card.Text>
                </Card.Body>
                <Row>
                    <Col>
                        <Button className="comment-button brand-button">
                            Like
                        </Button>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Reply" />
                    </Col>
                </Row>
            </Card>
        </Card>
    );
};

export default Posts;
