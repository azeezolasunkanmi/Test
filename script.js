document.addEventListener("DOMContentLoaded", () => {
  const usersContainer = document.querySelector(".users-container");
  const userTemplate = document.getElementById("user-template").content;

  // Sample user data
  const users = [
    {
      name: "John Doe",
      email: "",
      age: 28,
      info: "A passionate wildlife enthusiast and photographer, often found exploring nature",
      image: "images/profile1.png",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: "",
      info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes",
      image: "images/profile2.png",
    },
    {
      name: "",
      email: "mikebrown@example.com",
      age: 45,
      info: "Tech-savvy and innovative, Sarah is Known for her cutting-edge software solutions",
      image: "",
    },
    {
      name: "Sarah Johnson",
      email: "sarahjohnson@example.com",
      age: 30,
      info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country",
      image: "images/profile3.png",
    },
    {
      name: "Alex Martinez",
      email: "mikebrown@example.com",
      age: 27,
      info: "",
      image: "",
    },
  ];

  let counter = 0; // Initialize a counter to alternate rotations

  users.forEach(user => {
    // Clone the template for each user
    const userCardFragment = document.importNode(userTemplate, true);
    const userCard = userCardFragment.querySelector(".user-container");

    // Alternate rotation direction based on counter (even -> right, odd -> left)
    const rotateDirection =
      counter % 2 === 0 ? "rotate(5deg)" : "rotate(-5deg)";
    userCard.style.setProperty("--rotate-direction", rotateDirection);

    counter++;

    // Populate card with user data
    const userImage = userCard.querySelector(".user-image");
    userImage.src = user.image || "images/default.png"; // Fallback for missing images
    userImage.alt = `${user.name}'s Image`;
    userImage.onerror = () => (userImage.src = "images/default.png"); // Handle broken images

    userCard.querySelector(".user-name").textContent = user.name || "";
    userCard.querySelector(".user-email").textContent = user.email || "";
    userCard.querySelector(".user-age").textContent = user.age
      ? `${user.age} years old`
      : "";
    userCard.querySelector(".user-info").textContent = user.info || "";

    // Add close functionality
    const closeButton = userCard.querySelector(".btn-close");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
      console.log(userCard);
      userCard.remove();
    });

    usersContainer.appendChild(userCard);
  });
});
