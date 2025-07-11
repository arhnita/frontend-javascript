interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


//task 1b

interface Directors extends Teacher {
  numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

//function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}}`;
}
console.log(printTeacher("John", "Doe"))


//classes

interface studentClassInterface {
  workFromHome(): string;
  displayName(): string
}

interface studentClassConstructor {
  new (firstName: string, lastName: string): studentClassInterface
}

class StudentClass implements studentClassInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string){
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workFromHome(): string {
    return "Currently Working";
  }

  displayName(): string {
    return this._firstName;
  }
}

const student = new StudentClass("Anita", "Samuel")
console.log(student);
console.log(student.workFromHome());
console.log(student.displayName())