
```
Сгенерируй описание упражнения «НАЗВАНИЕ_УПРАЖНЕНИЯ» в формате Markdown по следующему шаблону:

1) Укажи три блока сразу после названия, они должны быть в формате YAML в блоке YAML-форматтера Obsidian и представлять из себя теги:

**Категория**:  
(в каком виде упражнение выполняется: базовое/изолирующее)
Допустимые теги #базовое #изолирующее

**Основные_группы_мышц**:  
(какие мышцы прежде всего задействованы)
Допустимый тег — название мышцы в змеиной нотации, например #большая_грудная #бицепс #косая_мышца_пресса
Значения этого поля YAML должны быть приведены в виде YAML-списка

**Позиция**:  
(на каком участке амплитуды – растянутом/укороченном/смешанном – создаётся максимальное напряжение)
Допустимые теги: #растянутая #сокращенная #смешанная

2) Затем размести раздел «Ключевые моменты техники» в виде маркированного списка (список из нескольких пунктов).

3) Заверши подразделом «Вариации», где опиши несколько специфических вариантов упражнения (отличающихся снарядами, положением тела или техникой).

Пример желаемого результата:
[пример для упражнения "Жим лёжа"]
<Не пиши тут название, начни сразу с YAML-форматтера>
---
Категория: "#базовое"
Основные_группы_мышц:
  - "#большая_грудная"
  - "#трицепс"
  - "#передняя_дельта"
Позиция: "#смешанная"
---

**Ключевые моменты техники**:  
- Ложитесь на скамью, стопы упираются в пол  
- Держите лопатки сведёнными и грудь «раскрытой»  
- Следите за положением локтей, они не должны "смотреть друг на друга". Если "положить" на них плоскости, они должны быть наклонены под ~45 градусов
- Опускайте штангу к нижней части груди  
- Выжимайте штангу строго вертикально вверх

> [!warning] Избегайте «отбивания» от груди — сохраняйте умеренный темп движения. # это опциональный блок предупреждения о том, на что обязательно нужно обратить внимание в упражнении. Ты можешь не добавлять его, если в упражнении нет важных моментов, на которые нужно обратить внимание, добавить один или несколько, если нужно

**Вариации**:  
- **Жим штанги узким хватом**
	- Большее вовлечение трицепсов  
- **Жим гантелей**
	- Более свободная траектория для каждой руки
- **Жим на наклонной скамье**
	- Акцент на верхней части груди
- **Жим в Смите** 
	- Упрощенная траектория, повышенная безопасность, хорошо подходит для новичков и при акцентах на конкретную зону


Укажи всё это кратко и структурированно.
Верни ответ так, чтобы его было удобно скопировать и вставить в obsidian, в виде codeblock
```
