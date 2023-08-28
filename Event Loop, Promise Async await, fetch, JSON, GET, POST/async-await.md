##Async/Await
это синтаксический сахар над промисами в JavaScript, который делает асинхронный код более читаемым и удобным для написания. Он позволяет писать асинхронный код так, как будто это синхронный код, делая его более линейным и менее вложенным.

- Async: Ключевое слово async ставится перед функцией и указывает, что эта функция будет возвращать промис. Внутри функции вы можете использовать ключевое слово await, чтобы приостановить выполнение функции до разрешения промиса. В это время выполнение функции будет приостановлено, и управление будет передано другим операциям.

- Await: Ключевое слово await используется внутри async функций для приостановки выполнения до разрешения промиса. Когда промис разрешается, его значение будет возвращено из await, и выполнение функции продолжится.