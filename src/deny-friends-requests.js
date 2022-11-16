(() => {
  const friends = [...document.querySelectorAll('.friends_user_row')];

  if (friends.length === 0) {
    alert('Не от кого отписываться!');
  }

  const buttons = friends.map((friend) => {
    const button = friend.querySelector('[id*=deny]');
    return button;
  });
  buttons.forEach((button) => {
    button.click();
  });
})();
