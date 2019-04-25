// CODE here for your Lambda Classes

class Person {
    constructor(person){
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak(){
        return `Hello my name is ${name}, I am from ${location}`
    }
}


class Instructor extends Person{
    constructor(person){
        super(person)
        this.specialty =person.specialty;
        this.favLanguge= person.favLanguge;
        this.catchPhrase =person.catchPhrase;

    }

    demo (subject){
     return `Today we are learning about ${subject}`
    };
    grade(student,subject){
     return ` ${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(person){
        super(person);
        this.previousBackground=person.previousBackground;
        this.classNmae = person.className;
        this.favSubjects = person.favSubjects;
    }
    listsSubjects(student){
      student.favSubjects
    }
    PRAssignment(subject,student){
      return `${student.name} has submitted a PR for ${subject}`
    };
    sprintChallenge(student){
        return `${student.name} has begun sprint challenge on ${subject}`
    };
    

};



class ProjectManagers extends Instructor{
    constructor(person){
        super(person)
         this.gradClassName=person.gradClassName
        this.favInstructor=person.favInstructor
    }
    standup(){
       return ` ${this.name} announces to ${this.channel}, @channel standy times!​​​​​`
    };
  debugsCode(name,student,subject){
       return `${name} debugs ${student.name}'s code on ${subject}`
    }
}








const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  console.log(fred)