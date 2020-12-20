
const postIsLiked = async (authToken, postId) => {
        //method to know is post is liked by a user
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token "+authToken);
        myHeaders.append("Cookie", "sessionid=92jccbwo7zm1q4py6aehunwdctv1szqi; csrftoken=32SnaSPitIge3XqyW4eE1Biea2RYC644xdTL6aFUl7K40cVMZTfsy0zYjv4XZEei");

        var formdata = new FormData();
        formdata.append("post_id", `${postId}`);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://bloginapi.herokuapp.com/post-is-liked/", requestOptions)
        .then(response => response.text())
        .then(result => {
            let postIsLiked = result.post_is_liked;
            if(postIsLiked){
                return true;
            }
            else{
                return false;
            }
        })
        .catch(error => {
            return null;
        });
       

            }



togglePostLike = (authToken, postId)=>{
        //method to know is post is liked by a user
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token "+authToken);
        myHeaders.append("Cookie", "sessionid=92jccbwo7zm1q4py6aehunwdctv1szqi; csrftoken=32SnaSPitIge3XqyW4eE1Biea2RYC644xdTL6aFUl7K40cVMZTfsy0zYjv4XZEei");

        var formdata = new FormData();
        formdata.append("post_id", `${postId}`);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://bloginapi.herokuapp.com/toggle-post-like/", requestOptions)
        .then(response => response.text())
        .then(result => {
            let postIsLiked = result.state;
            if(state === "post liked"){
                return true;
            }
            else{
                return false;
            }
        })
        .catch(error => {
            // return null;
        });
            
}