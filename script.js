function form_valid()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.trim() == "" || password.trim() == "")
    {
        alert("Fields are Mandatory to fill!")
    }
}