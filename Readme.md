**1. Введение**

Приложение timeboxing разрабатывается для управления временем. Основная идея в составлении расписания на каждый день, и выделении 3-х задач, по завершению которых день считается успешным. Методика была признана Гарвардским университетом #1 по эффективности в 2018 году. Она помогает методично достигать результатов, приоретизировать задачи, убирает проблему выбора в течении дня.

**2. Стек технологий**

Backend написан на языке C#, REST-запросы обрабатываются с помощью WebApi, формат данных JSON
Frontend написан с помощью фреймворка Angular v.17 (триада HTML, CSS, TS).

**3. Prerequisite**

Для запуска приложения необходим .Net Runtime 7 (https://dotnet.microsoft.com/en-us/download/dotnet/7.0), Angular 17, node js.

**4. Запуск приложения** 

Для запуска приложения необходимо выполнить:

- Собрать backend (находясь в корне проекта):
         dotnet publish timeboxing.sln -r win-x64 -p:PublishSingleFile=true --configuration Release
- Запустить собранный файл timeboxing_back.exe, размещённый по адресу ~\timeboxing\timeboxing_back\bin\Release\net7.0\win-x64\publish\
        Будет запущен сервис, который принимает HTTP-запросы от фронта по адресу ?http://localhost:8080.
        На данный момент реализовано два GET-запроса по адресам 
        /api/getinsights
        /api/getday?date=MM/DD/YYYY, где MM-DD-YYYY месяц, день, год.
- Открыть папку в VS Code ~\timeboxing\timeboxing_front\
- Выполнить последовательность команд в терминале:
        npm install
        ng serve
        Приложение будет запущено по адресу http://localhost:4200
