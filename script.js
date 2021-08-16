const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');



// prompt a user to select a media stream

async function selectMediaStream(){
    try{
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }

    } catch(error) {
    }
}

button.addEventListener('click', async ()=> {
 button.disabled=true;
 await videoElement.requestPictureInPicture();
 button.disabled=false;
});


// On load

selectMediaStream();