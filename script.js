let cvData = {
    personal: {}
};

function savePersonal() {

    let fullName = document.getElementById("fullName").value.trim();
    let location = document.getElementById("location").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    if (fullName === "" || location === "" || phone === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter valid email");
        return;
    }

    cvData.personal = {
        fullName,
        location,
        phone,
        email
    };

    document.getElementById("message").innerText =
        "Personal information saved successfully.";

    console.log(cvData);
}
// ...................................................

