export const renderLoggedInPage = () => {
    document.getElementById("authenticated-section").style.display = "flex";
    document.getElementById("unauthenticated-section").style.display = "none";
    document.getElementById("logout-btn").style.display = "flex";
};

export const renderLoggedOutPage = () => {
    document.getElementById("authenticated-section").style.display = "none";
    document.getElementById("unauthenticated-section").style.display = "flex";
    document.getElementById("logout-btn").style.display = "none";
};

// Frontend - Toastify
export const toastError = (text) => {
    Toastify({
    text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "rgb(220 38 38)",
    },
    onClick: function(){} // Callback after click
    }).showToast(); 
};

export const toastSuccess = (text) => {
    Toastify({
    text,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "rgb(22 163 74)",
    },
    onClick: function(){} // Callback after click
    }).showToast(); 
};
