import axios from 'axios';
import firebasecore from 'firebase/app';
import 'firebase/storage';



export function getFeed(){
    axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
    return axios.get('http://localhost:5000/posts/feed');
}

export function getPosts(postparam){
  axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
  return axios.post('http://localhost:5000/posts/getposts',postparam);
}

export async function likePost(reqbody){
  axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
  return axios.post('http://localhost:5000/posts/likepost',reqbody);
}

export async function onSubmit(event){
  const extn = event.target.photo.files[0].name.split(".");
  const filename = (new Date()).getTime().toString(36) + (new Date()).getUTCMilliseconds(36).toString(36) + "." + extn[1];
  const uploadstr = {};
    event.preventDefault();
    axios.defaults.headers.common['auth-token'] = sessionStorage.getItem('token');
   uploadstr.post_title = event.target.title.value;
    const storageRef = firebasecore.storage().ref();
    const uploadTask = storageRef.child('images/posts/' + filename).put(event.target.photo.files[0]);
    // Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebasecore.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
(snapshot) => {
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebasecore.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebasecore.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
      default:
          console.log('default');
          break;
  }
}, 
(error) => {
  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;
    case 'storage/canceled':
      // User canceled the upload
      break;

    // ...

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
      default:
          console.log('default');
          break;
  }
}, 
() => {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
    console.log('File available at', downloadURL);
    uploadstr.post_image = downloadURL;
    const url = 'http://localhost:5000/posts/addpost';
    await axios.post(url,uploadstr).then((data) => {
      console.log('Posted into nodeserver');
      console.log(data);
  }).catch((err) => {
      console.log(err);
    });
}
);
  });
}