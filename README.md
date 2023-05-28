# Task19

сборка docker-compose 

docker-compose up

в случае если находится на другом диске

docker-compose -f D:\Task19\Task19\docker-compose.yml up



1. Установить docker на ваш ПК

2. Сделать git clone репозитория (более надежно скачать архивом)

3. Перейти в корневой каталог Task19 в командной строке

4. Запустить docker

5. Провести команду docker-compose up в корневом каталоге проекта, подождать завершение команды

7. Чтобы поднять базу в docker образе, нужно провести 2 команды:

docker cp ./19task.sql postgres:/docker-entrypoint-initdb.d/19task.sql

docker exec -u postgres postgres psql 19task postgres -f docker-entrypoint-initdb.d/19task.sql

8. Зайти в приложение docker`a и запустить container-ui через порт 8080



Ссылка на файл test.csv

https://drive.google.com/file/d/14nAd9-8F4ASZflLpXoDxK7km4RtAAqf9/view?usp=drive_link




Инструкция к fastAPI:

1. Скачать python

2.Зайти в папку решения Task19DS и открыть на ее уровне консоль

3.Прописать команду python -m venv LCT

4. Активировать вирт. окружение, прописав в консоль .\LCT\Scripts\activate

В случае возникновения ошибки на пункте 4
(Невозможно загрузить файл C:\Task19\Task19v2\Task19\Task19DS\LCT\Scripts\Activate.ps1, так как выполнение сценариев отключено в этой системе)

https://ru.stackoverflow.com/questions/935212/powershell-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2-%D0%BE%D1%82%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%BE-%D0%B2-%D1%8D%D1%82%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B5

5.Установить библиотеки командой

pip install fastapi pickle uvicorn scipy numpy scikit-learn implicit

Для более надежной установки советуем установить библиотеки отдельно

6.Послу установки библиотек, запускаем сервер командой

uvicorn fastAPI.model:app --reload




