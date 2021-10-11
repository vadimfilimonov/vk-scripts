(() => {
  const friendsElements = [...document.querySelectorAll(".friends_user_row")];
  const deactivatedFriendsElements = friendsElements.filter((el) => {
    const photoEl = el.querySelector("img");
    return photoEl.src.includes("deactivated");
  });

  if (deactivatedFriendsElements.length === 0) {
    alert("There are no deactivated friends!");
    return;
  }

  const deactivatedFriendsNames = deactivatedFriendsElements
    .map((el) => {
      const nameEl = el.querySelector(".friends_field_title");
      return nameEl.textContent;
    })
    .filter((name) => name !== "DELETED");

  const shouldDeleteDeactivatedFriends = confirm([
    "Are you sure you want to delete next friends?",
    deactivatedFriendsNames.join(", "),
  ].join("\n"));

  if (!shouldDeleteDeactivatedFriends) {
    return;
  }

  const deleteButtons = deactivatedFriendsElements.map((el) => {
    const menuItems = [...el.querySelectorAll(".ui_actions_menu_item")];
    const deleteButton = menuItems.find(
      (el) =>
        el.textContent === "Удалить из друзей" || el.textContent === "Unfriend",
    );
    return deleteButton;
  });
  deleteButtons.forEach((button) => {
    button.click();
  });
})();
