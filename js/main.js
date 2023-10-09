previewCounter = document.querySelector(".previewCounter");
previewName = document.querySelector(".previewName");
previewImage = document.querySelector(".previewImage");
previewBtnLeft = document.querySelector(".previewBtnLeft");
previewBtnRight = document.querySelector(".previewBtnRight");
projects = ["project1", "project2", "project3", "project4", "project5"];

previewBtnLeft.addEventListener("click", previewBtnLeftAction)
previewBtnRight.addEventListener("click", previewBtnRightAction);

function previewBtnLeftAction() {
    console.log("left button pressed");
    var currentValue = parseInt(previewCounter.innerText.split('/')[0]);
    currentValue = currentValue == 1 ? 5 : --currentValue;
    previewCounter.innerText = `${currentValue}/05`;
    previewName.innerText = projects[currentValue-1];
    previewImage.src = `img/gallery${currentValue}.jpg`;
}
function previewBtnRightAction() {
    console.log("right button pressed");
    var currentValue = parseInt(previewCounter.innerText.split('/')[0]);
    currentValue = currentValue == 5 ? 1 : ++currentValue;
    previewCounter.innerText = `${currentValue}/05`;
    previewName.innerText = projects[currentValue - 1];
    previewImage.src = `img/gallery${currentValue}.jpg`;
}