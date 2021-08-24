// React Bootstrap
import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

// CSS
import "./AddAPost.css";

interface IPost {
    description: string;
    id: string;
    imageOneCode: string;
    imageTwoCode: string;
    imageThreeCode: string;
    videoCode: string;
    postID: string;
    role: string;
    email: string;
}
interface IMedia {
    imageOne?: any;
    imageOneCode?: string;
    imageTwo?: any;
    imageTwoCode?: string;
    imageThree?: any;
    imageThreeCode?: string;
    video?: any;
    videoCode: string;
}

const AddAPost = () => {
    // const [ disableButton, setDisableButton]= useState(false);
    const [post, setPost] = useState<IPost>({
        description: "",
        imageOneCode: "",
        imageTwoCode: "",
        imageThreeCode: "",
        videoCode: "",
        postID: "id" + new Date() + Math.random().toString(16).slice(2),
        role: sessionStorage.getItem("role") || "N/A",
        email: sessionStorage.getItem("email") || "N/A",
        id: sessionStorage.getItem("_id") || "N/A",
    });
    const [media, setMedia] = useState<IMedia>({
        imageOne: null,
        imageOneCode: '',
        imageTwo: null,
        imageTwoCode: '',
        imageThree: null,
        imageThreeCode: '',
        video: null,
        videoCode: '',
    });
    const [video, setVideo] = useState({});

    const handleTextChange = (e: any) => {
        const newpost = { ...post };
        newpost.description = e.target.value;
        setPost(newpost);
    };
    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file.type.startsWith("image/")) {
            const newMedia = { ...media };
            const newPost = { ...post };
            const code = "postCode " + new Date() + Math.random().toString(16).slice(2)
            if (!media.imageOne) {
                newMedia.imageOne = file;
                newMedia.imageOneCode = code;
                newPost.imageOneCode = code;
                setMedia(newMedia);
                setPost(newPost);
            } else if (!media.imageTwo) {
                newMedia.imageTwo = file;
                newMedia.imageTwoCode = code;
                newPost.imageTwoCode = code;
                setMedia(newMedia);
                setPost(newPost);
            } else if (!media.imageThree) {
                newMedia.imageThree = file;
                newMedia.imageThreeCode = code;
                newPost.imageThreeCode = code;
                setMedia(newMedia);
                setPost(newPost);
            }
            console.log(media, "media");
        } else {
            alert("Please upload image file");
        }
    };

    const handleVideoChange = (e: any) => {
        const file = e.target.files[0];
        if (file.type.startsWith("video/")) {
            const newMedia = { ...media };
            const newPost = { ...post };
            const code = "postCode " + new Date() + Math.random().toString(16).slice(2)
            newMedia.video = file;
            newMedia.videoCode = code;
            newPost.videoCode = code;
            setMedia(newMedia);
            setPost(newPost);
            console.log(media, "media");
        } else {
            alert("Please upload image file");
        }
    };

    const handleRemove = (removedElement: String) => {
        console.log(removedElement);
        const newMedia = { ...media };
        const newPost = { ...post };
        switch (removedElement) {
            case "imageOne":
                newMedia.imageOne = null;
                newMedia.imageOneCode = '';
                newPost.imageOneCode = '';
                setMedia(newMedia);
                setPost(newPost);
                break;
            case "imageTwo":
                newMedia.imageTwo = null;
                newMedia.imageTwoCode = '';
                newPost.imageTwoCode = '';
                setMedia(newMedia);
                setPost(newPost);
                break;
            case "imageThree":
                newMedia.imageThree = null;
                newMedia.imageThreeCode = '';
                newPost.imageThreeCode = '';
                setMedia(newMedia);
                setPost(newPost);
                break;
            case "video":
                newMedia.video = null;
                newMedia.videoCode = '';
                newPost.videoCode = '';
                setMedia(newMedia);
                setPost(newPost);
                break;
            default:
            // code block
        }
        console.log(media, "media");
    };
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
        // body: JSON.stringify({ userName: userNameInput, email: email }),
        const formData = new FormData();
          formData.append("description", post.description);
          formData.append("imageOneCode", post.imageOneCode);
          formData.append("imageTwoCode",post.imageTwoCode);
          formData.append("imageThreeCode",post.imageThreeCode);
          formData.append("videoCode",post.videoCode);
          formData.append("imageOne", media.imageOne);
          formData.append("imageTwo", media.imageTwo);
          formData.append("imageThree", media.imageThree);
          formData.append("imageThree", media.imageThree);
          formData.append("role", post.role);
          formData.append("postID", post.postID);
          formData.append("email", post.email);
          formData.append("id", post.id);
        fetch("http://localhost:5000/api/post/addPost", {
            method: "POST",
            // headers: { "content-type": "application/json" },
            body: formData
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
