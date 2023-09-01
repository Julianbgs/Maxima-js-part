const student = {
    age: 18,
    name: 'Udes',
    getStudent: function (education, rating) {
        return {
            age: this.age,
            name: this.name,
            education,
            rating,
        }
    }

}

const anotherStudent = {
    age: 31,
    name: 'Emil'
}






const setStudentDataToStorage = () => {
    const bindDataFunc = student.getStudent.bind(anotherStudent, 'commmander', 5);
    const {age, name, education, rating} = bindDataFunc();
    if (typeof window !== 'undefined') {
        localStorage.setItem('age', age)
        localStorage.setItem('name', name)
        localStorage.setItem('education', education)
        localStorage.setItem('rating', rating)
    } else {
        console.log('Вы на сервере или в терминале, данных нет');
    }
}

const setDelay = (ms) => {
   return new Promise(resolve => setTimeout(() => {
       resolve(setStudentDataToStorage)
   }, ms))
}


async function gettingData () {
    console.log('Now we write data student');
    const result = await setDelay(2000);
    console.log('Хмм, а вот и данные: ');
    result();
    if (typeof window !== 'undefined') {
        console.log(localStorage.getItem('age'));
        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('education'));
        console.log(localStorage.getItem('rating'));
    }

}

gettingData()