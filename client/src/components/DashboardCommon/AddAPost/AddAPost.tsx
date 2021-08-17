// React Bootstrap
import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

// CSS
import "./AddAPost.css";

interface IPost {
    description: string;
    id: string;
    imageOneCode?: string;
    imageTwoCode?: string;
    imageThreeCode?: string;
    videoCode?: string;
    postID: string;
}
interface IMedia {
    imageOne?: any;
    imageTwo?: any;
    imageThree?: any;
    video?: any;
}

const AddAPost = () => {
    // const [ disableButton, setDisableButton]= useState(false);
    const [post, setPost] = useState<IPost>({
        description: "",
        id: "",
        imageOneCode: "",
        imageTwoCode: "",
        imageThreeCode: "",
        videoCode: "",
        postID: "id" + new Date() + Math.random().toString(16).slice(2),
    });
    const [media, setMedia] = useState<IMedia>({
        imageOne: null,
        imageTwo: null,
        imageThree: null,
        video: null,
    });
    const [video, setVideo] = useState({});

    const handleTextChange = (e: any) => {
        console.log(e.target.value);
        const newpost = { ...post };
        newpost.description = e.target.value;
        setPost(newpost);
    };
    const handleImageChange = (e: any) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        if (file.type.startsWith("image/")) {
            const newMedia = { ...media };
            if (!media.imageOne) {
                newMedia.imageOne = file;
                setMedia(newMedia);
            } else if (!media.imageTwo) {
                newMedia.imageTwo = file;
                setMedia(newMedia);
            } else if (!media.imageThree) {
                newMedia.imageThree = file;
                setMedia(newMedia);
            }
            console.log(media, "media");
        } else {
            alert("Please upload image file");
        }
    };

    const handleVideoChange = (e: any) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        if (file.type.startsWith("video/")) {
            const newMedia = { ...media };
            newMedia.video = file;
            setMedia(newMedia);
            console.log(media, "media");
        } else {
            alert("Please upload image file");
        }
    };

    const handleRemove = (removedElement: String) => {
        console.log(removedElement);
        const newMedia = { ...media };
        switch (removedElement) {
            case "imageOne":
                newMedia.imageOne = null;
                setMedia(newMedia);
                break;
            case "imageTwo":
                newMedia.imageTwo = null;
                setMedia(newMedia);
                break;
            case "imageThree":
                newMedia.imageThree = null;
                setMedia(newMedia);
                break;
            case "video":
                newMedia.video = null;
                setMedia(newMedia);
                break;
            default:
            // code block
        }
        console.log(media, "media");
    };
    console.log(media.imageOne, "media");
    // const postInfo = {
    //     description,
    //     id,
    //     comments: [],
    //     reactions:[],
    //     imageOneCode,
    //     imageTwoCode,
    //     imageThreeCode,
    //     videoCode,
    //     postID
    // };
    // var id =  "id" + new Date() + Math.random().toString(16).slice(2)
    const handlePost = () => {
        // setDisableButton(true);
        const id = sessionStorage.getItem("_id");
        const email = sessionStorage.getItem("email");
        const role = sessionStorage.getItem("role");
        // body: JSON.stringify({ userName: userNameInput, email: email }),
        fetch("http://localhost:5000/api/post/addPost", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                description: post.description,
                id,
                email,
                imageOneCode: post.imageOneCode,
                imageTwoCode: post.imageTwoCode,
                role: role,
                imageThreeCode: post.imageThreeCode,
                videoCode: post.videoCode,
                postID: post.postID,
                imageOne: media.imageOne,
                imageTwo: media.imageTwo,
                imageThree: media.imageThree,
                video: media.video,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success === true) {
                    alert("You posted successfully!!");
                    window.location.reload();
                }
            });
    };
    return (
        <div className="container">
            <Row>
                <div className="col-3">
                    <div className="profile-img">John</div>
                </div>

                <div className="col-9">
                    <Form.Control
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write Something"
                    />
                    {media.imageOne ? (
                        <div className="row">
                            <div className="col-md-3">
                                {console.log(media.imageOne)}
                                <img
                                    style={{ width: "50%" }}
                                    src={URL.createObjectURL(media.imageOne)}
                                    alt=""
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <p
                                    onClick={() => handleRemove("imageOne")}
                                    className="bg-primary text-danger m-1 p-1 text-center rounded"
                                >
                                    remove
                                </p>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    {!media.imageOne && (
                        <div className="imageOne">
                            <input
                                onChange={handleImageChange}
                                type="file"
                                name="imageOne"
                                id="imageOne"
                                style={{ display: "none" }}
                            />
                            <label
                                className="bg-primary m-2 p-2 rounded text-white"
                                htmlFor="imageOne"
                            >
                                Upload image
                            </label>
                        </div>
                    )}

                    {media.imageTwo && (
                        <div className="row">
                            <div className="col-md-3">
                                <img
                                    style={{ width: "50%" }}
                                    src={URL.createObjectURL(media.imageTwo)}
                                    alt=""
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <p
                                    onClick={() => handleRemove("imageTwo")}
                                    className="bg-primary text-danger m-1 p-1 text-center rounded"
                                >
                                    remove
                                </p>
                            </div>
                        </div>
                    )}
                    {media.imageOne && !media.imageTwo && (
                        <div className="imageTwo">
                            <input
                                onChange={handleImageChange}
                                type="file"
                                name="imageTwo"
                                id="imageTwo"
                                style={{ display: "none" }}
                            />
                            <label
                                className="bg-primary m-2 p-2 rounded text-white"
                                htmlFor="imageTwo"
                            >
                                Upload image
                            </label>
                        </div>
                    )}

                    {media.imageThree && (
                        <div className="row">
                            <div className="col-md-3">
                                <img
                                    style={{ width: "50%" }}
                                    src={URL.createObjectURL(media.imageThree)}
                                    alt=""
                                />
                            </div>
                            <div className="col-md-3 mt-3">
                                <p
                                    onClick={() => handleRemove("imageThree")}
                                    className="bg-primary text-danger m-1 p-1 text-center rounded"
                                >
                                    remove
                                </p>
                            </div>
                        </div>
                    )}
                    {media.imageOne && media.imageTwo && !media.imageThree && (
                        <div className="imageThree">
                            <input
                                onChange={handleImageChange}
                                type="file"
                                name="imageThree"
                                id="imageThree"
                                style={{ display: "none" }}
                            />
                            <label
                                className="bg-primary m-2 p-2 rounded text-white"
                                htmlFor="imageThree"
                            >
                                Upload image
                            </label>
                        </div>
                    )}

                    {media.video && (
                        <div className="row">
                            <div className="col-md-3">
                                <video style={{ width: "100%" }} controls>
                                    <source
                                        src={media.video}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="col-md-3 mt-3">
                                <p
                                    onClick={() => handleRemove("video")}
                                    className="bg-primary text-danger m-1 p-1 text-center rounded"
                                >
                                    remove
                                </p>
                            </div>
                        </div>
                    )}

                    {!media.video && (
                        <div className="video">
                            <input
                                onChange={handleVideoChange}
                                type="file"
                                name="video"
                                id="video"
                                style={{ display: "none" }}
                            />
                            <label
                                className="bg-success m-2 p-2 rounded text-white"
                                htmlFor="video"
                            >
                                Upload video
                            </label>
                        </div>
                    )}
                    <Button
                        onClick={handlePost}
                        className="post-button brand-button"
                    >
                        Post
                    </Button>

                    {/* {
                        post.description ?
                        <Button  onClick={handlePost} className="post-button brand-button">Post</Button>
                        :
                        <Button disabled={true} className="post-button brand-button">Post</Button>
                    } */}
                    <br />
                </div>
            </Row>
        </div>
    );
};

export default AddAPost;
