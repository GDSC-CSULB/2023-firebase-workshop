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