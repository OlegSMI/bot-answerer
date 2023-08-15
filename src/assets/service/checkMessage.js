import { hammingDistance } from "./attachedFunc";

export function botAnswer(msg) {
  let answer;
  let buts = ["Основное меню", "Как дела?"];
  if (msg == "Заказать пиццу") {
    answer = "Пицца уже в пути, мой друг, что-то еще?";
  } else if (msg == "Найти ключи") {
    answer =
      "Вижу, вижу. Кто-то забыл их в кармане своей куртки. Нужно быть менее рассеянным, мой друг.";
  } else if (msg == "Подсказать смысл жизни") {
    answer = "Это лучше спросить у моего хорошего друга: GPT-3.";
  } else if (msg.length < 4) {
    answer = "С такими короткими сообщениями я не работаю, простите.";
  } else if (hammingDistance(msg, "Сделай") < 3) {
    answer = "Вы хотите чтобы я сделал это? Будет сделано!";
  } else if (msg == "Как дела?") {
    answer = "Чувствую себя отлично!";
  } else if (msg == "Основное меню") {
    answer = "Вы снова в главном меню";
    buts = ["Заказать пиццу", "Найти ключи", "Подсказать смысл жизни"];
  } else {
    answer = "Я вас не понял. Повторите?";
  }

  return {
    msg: answer,
    author: "bot",
    buts: buts,
  };
}
