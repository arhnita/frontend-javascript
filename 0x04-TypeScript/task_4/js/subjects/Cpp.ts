namespace Subjects {
    export interface Teacher {
        experienceTeachingC: number
    }

    export class Cpp extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp'
        };
        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`

        }

    }
}