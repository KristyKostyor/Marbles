const gameModule = (() => {
  let playerBalls = 5;
  let botBalls = 5;

  const isEven = (number) => {
    return number % 2 === 0;
  };

const play = () => {
  while (playerBalls > 0 && botBalls > 0) {
    const maxGuess = Math.min(playerBalls, botBalls);
    let playerGuess = prompt(
      `У вас ${playerBalls} шариков. Введите число от 1 до ${maxGuess}:`
    );

    if (playerGuess === null) {
      alert("Игра завершена!");
      break;
    }

    playerGuess = parseInt(playerGuess);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > maxGuess) {
      alert("Некорректный ввод!");
      continue;
    }

    if (playerGuess > botBalls) {
      alert("Вы не можете выбрать больше шариков, чем есть у бота!");
      continue;
    }

    if (Math.random() < 0.5) {
      const botGuess = playerGuess;
      alert(`Бот угадал! Он забирает ${botGuess} ваших шариков.`);
      playerBalls -= botGuess;
      botBalls += botGuess;
    } else {
      const botGuess = Math.floor(Math.random() * (maxGuess - 1)) + 1;
      if (botGuess === playerGuess) {
        alert(`Бот угадал! Он забирает ${playerGuess} шариков.`);
        playerBalls -= playerGuess;
        botBalls += playerGuess;
      } else {
        const botBallsToGive = playerGuess;
        playerBalls += botBallsToGive;
        botBalls -= botBallsToGive;
        alert(`Бот не угадал. Он отдает ${botBallsToGive} своих шарика(ов).`);
      }
    }

    if (playerBalls === 0) {
      alert("Вы проиграли! У вас закончились шарики.");
    } else if (botBalls === 0) {
      alert("Вы выиграли! У бота закончились шарики.");
    } else {
      alert(
        `У вас осталось ${playerBalls} шариков и у бота ${botBalls} шариков.`
      );
    }

    if (botBalls < 0) {
      botBalls = 0;
    }
  }
};

  return {
    play,
  };
})();

window.onload = () => {
  gameModule.play();
};
