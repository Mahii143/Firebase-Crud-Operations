var rollV, nameV, genderV, addressV;
function readFom() {
    rollV = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
    console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("delete").onclick = function () {
    readFom();
    firebase
        .database()
        .ref("student/" + rollV)
        .remove();
    alert("Data Deleted");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
};
document.getElementById("read").onclick = function () {
    readFom();
    firebase
        .database()
        .ref("student/" + rollV)
        .on("value", function (snap) {

            document.getElementById("roll").value = snap.val().rollNo;
            document.getElementById("name").value = snap.val().name;
            document.getElementById("gender").value = snap.val().gender;
            document.getElementById("address").value = snap.val().address;
        });
};