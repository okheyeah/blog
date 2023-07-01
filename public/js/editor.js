// Post Editor
const postTitleField = document.querySelector('.post__title');
const contentField = document.querySelector('.post__content');

// Post Banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector('.banner');
let bannerPath;

// Post Options
const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

// change event 
bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner")
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

// function uploadImage
const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if(file && file.type.includes("image")){
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
        .then(data => {
            if(uploadType == "image"){
                addImage(data, file.name);
            } else{
                bannerPath = `${location.origin}/${data}`;
                banner.style.backgroundImage = `url("${bannerPath}")`;
            }
        })
    } else{
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = contentField.selectionStart;
    let textToInsert = `\r![${alt}](${imagepath})\r`;
    contentField.value = contentField.value.slice(0, curPos) + textToInsert + contentField.value.slice(curPos);
}