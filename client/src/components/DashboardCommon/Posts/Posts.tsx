// React Bootstrap
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// CSS
import "./Posts.css";


const Posts = () => {

    const id = sessionStorage.getItem("_id");
    const [ posts, setPosts ] = useState<any[]>([])
    const [ files, setFiles ] = useState<any[]>([])
    const email = sessionStorage.getItem("email") || 'user@gmail.com';
    const name = email.substring(0, email.lastIndexOf("@"));
    useEffect (() => {
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
                setPosts(result.data);
            })
            .catch((err) => {console.log(err)})
    },[id])

    useEffect(() => {
        fetchFile();
    },[files.length])
    
    const fetchFile = ()=>{
       
        // for (let i = 0; i < files.length; i++) {
        //     const element = files[i];
        //     const formData = new FormData();
        //     formData.append("code", post.code);
        //     fetch("http://localhost:5000/api/post/getFile", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: formData,
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //         setPosts(result.data);
        //     })
        //     .catch((err) => {console.log(err)})
            
        // }
    }
    return (
        <div>
            {
                posts.map ((post,index) =><Card key={index} className="card">
                { post.imageOneCode && files.push({fileCode: post.imageOneCode, file: {}})}    
                {post.imageTwoCode && files.push({fileCode: post.imageTwoCode, file: {}})}
                {post.imageThreeCode && files.push({fileCode: post.imageThreeCode, file: {}})}
                {post.videoCode && files.push({fileCode: post.videoCode, file: {}})}
                <Row>
                    <div className="col-4 col-md-2">
                        <div className="profile-img">John</div>
                    </div>
                    <div className="col-8 col-sm-6">
                        {console.log('inner')}
                        <h4>{name}</h4>
                        <small>{post.createdAt}</small>
                    </div>
                </Row>
                <Card.Body>
                    <Card.Text>
                        {post.description}
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
                            <h4>{name}</h4>
                            <small>{post.updatedAt}</small>
                        </div>
                    </Row>
                    <Card.Body>
                        <Card.Text>
                            {post.description}
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
            </Card> )
            }
        </div>
    );
};

export default Posts;

// let myArray = [
//     {id: 0, name: "Jhon"},
//     {id: 1, name: "Sara"},
//     {id: 2, name: "Domnic"},
//     {id: 3, name: "Bravo"}
//   ],
      
//   //Find index of specific object using findIndex method.    
//   objIndex = myArray.findIndex((obj => obj.id == 1));
  
//   //Log object to Console.
//   console.log("Before update: ", myArray[objIndex])
  
//   //Update object's name property.
//   myArray[objIndex].name = "Laila"
  
//   //Log object to console again.
//   console.log("After update: ", myArray[objIndex]


// fetch("http://localhost:5000/api/post/getPost", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({
//                 id,
//             }),
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result);
//                 setPosts(result.data);
//             })
//             .catch((err) => {console.log(err)})