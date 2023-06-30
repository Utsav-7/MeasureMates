<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <style>
        .success-message {
          background-color: #DFF2BF;
          border: 1px solid #4F8A10;
          color: #4F8A10;
          font-size: 18px;
          font-weight: 900;
          padding: 10px;
          margin-bottom: 20px;
          margin-left: 700px;
          margin-right: 700px;
          text-align: center;
        }

        .error-message {
          background-color: white;
          border: 1px solid #4F8A10;
          color: red;
          font-size: 18px;
          font-weight: 900;
          padding: 10px;
          margin-bottom: 20px;
          margin-left: 700px;
          margin-right: 700px;
          text-align: center;
        }
    </style>
    </style>
</head>
<body>

<?php
//Database connection
$host = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "unit_converter";

$conn = mysqli_connect($host, $db_user, $db_password, $db_name);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $full_name = $_POST["full_name"];
  $email = $_POST["email"];
  $username = $_POST["username"];
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm_password"];

  // Check if passwords match
  if ($password != $confirm_password) {
    echo '<div class="error-message">Password does not match...</div>';
    exit();
  }
  // Insert user data into the database
  $sql = "INSERT INTO users (full_name, email, username, password)
          VALUES ('$full_name', '$email', '$username', '$password')";
  if (mysqli_query($conn, $sql)) {
    echo '<div class="success-message">Registration successful</div>';
  } else {
    echo '<div class="error-message">Not Register !!!</div>';
  }
}
mysqli_close($conn);
?>
    <div id="video-background">
        <video autoplay muted loop>
          <source src="animation-1.mp4" type="video/mp4">
        </video>
    </div>
    <center>
    <div class="flexbox-container" style="padding-top: 130px;">
        <div class="flexbox-item fixed">
          <div class="box">
            <h2 style="font-size: 40px;font-weight: 900;"><b>MeasureMate</b></h2><hr>
            <h3 style="font-size: 40px;font-weight: 900;"><b>Registration</b></h3>
            <form id="logfrm" method="post" action="">    
                <input type="text" name="full_name" required placeholder="Full Name"><br><br>
                <input type="email" name="email" required placeholder="Email"><br><br>
                <input type="text" name="username" required placeholder="Username"><br><br>
                <input type="password" name="password" required placeholder="Password"><br><br>
                <input type="password" name="confirm_password" required placeholder="Confirm Password"><br><br>
                <!-- <input type="submit" style="background-color: rgb(50, 125, 211)
                ;border-radius: 2px;" value="Submit">
                <input type="reset" value="Reset"><br> -->
                <button type="submit" value="Register" class="btn btn-primary">Submit</button>
                <button type="submit" class="btn btn-primary">Reset</button>
                <!-- <button class="btn btn-primary"><a href="index.html" style="color: white;">Back</a></button> --><br>
                <a href="login.php">already have an account?</a>
            </form>
          </div>
        </div>
    </div>
    </center>
</body>
</html>


