'use strict'

const gameModule = (() => {
  let playerBalls = 5;
  let botBalls = 5;

  const isEven = (number) => {
    return number % 2 === 0;
  };

  const play = () => {
    while (playerBalls > 0 && botBalls > 0) {
      const playerGuess = parseInt(
        prompt(
          `У вас ${playerBalls} шариков. Введите число от 1 до ${playerBalls}:`
        )
      );

      if (playerGuess < 1 || playerGuess > playerBalls) {
        alert("Некорректный ввод!");
        continue;
      }

      if (Math.random() < 0.5) {
        alert(`Бот угадал! Он забирает все ваши ${playerBalls} шариков.`);
        botBalls += playerBalls;
        playerBalls = 0;
      } else {
        const botGuess = Math.floor(Math.random() * (playerBalls - 1)) + 1;
        if (botGuess > playerBalls) {
          botBalls += playerBalls;
          playerBalls = 0;
        } else {
          playerBalls -= botGuess;
          botBalls += botGuess;
        }
        alert(`Бот не угадал. Вы забираете ${botGuess} шариков.`);
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
    }
  };

  return {
    play,
  };
})();

window.onload = () => {
  gameModule.play();
};
