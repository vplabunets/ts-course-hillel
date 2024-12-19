// Academic performance: total credits, gpa
// Person info: first name, last name, birth day, gender: male, female, other
// Contact info = ...
// Full person info = ...;

enum Role {
  StudentRole = 'student',
  TeacherRole = 'teacher',
}
type Gender = 'male' | 'female' | 'other';
type Info = { firstName: string; lastName: string; birthDay: Date; gender: Gender; email: string; phone: string };
type ContactInfo = { email: string; phone: string };

const defaultContact = {
  email: 'info@university.com',
  phone: '+380955555555',
};

class UniversityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UniversityError';
  }
}

class University {
  name: string;
  courses: Course[] = [];
  groups: Group[] = [];
  people: Person[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  addGroup(group: Group): void {
    this.groups.push(group);
  }

  addPerson(person: Person): void {
    this.people.push(person);
  }

  findGroupByCourse(course: string): object | undefined {
    return this.groups.find((group: Group) => group.course === course);
  }

  getAllPeopleByRole(role: string): object | never {
    switch (role) {
      case 'student':
        return this.people.filter((person) => person.role === Role.StudentRole);
      case 'teacher':
        return this.people.filter((person) => person.role === Role.TeacherRole);
      default:
        return this.assertNeverRole(role);
    }
  }

  assertNeverRole(role: string): never {
    throw new Error(`Unhandled role: ${role}`);
  }
}

class Course {
  name: string;
  credits: number;
  discipline: string;

  constructor(name: string, credits: number, discipline: string) {
    this.name = name;
    this.credits = credits;
    this.discipline = discipline;
  }
}

class Group {
  name: string;
  course: string;
  teacher: string;
  students: Student[] = [];

  constructor(name: string, course: string, teacher: string) {
    this.name = name;
    this.course = course;
    this.teacher = teacher;
  }

  addStudent(student: Student): never | void {
    if (this.students.includes(student)) {
      throw new UniversityError('Student is already in the group');
    }

    this.students.push(student);
  }

  removeStudentById(id: number): never | void {
    const index = this.students.findIndex((student: Student) => student.id === id);

    if (!~index) {
      throw new UniversityError('Student not found in group');
    }

    this.students.splice(index, 1);
  }

  getAverageGroupScore(): number {
    if (this.students.length) {
      return 0;
    }

    const totalScore = this.students.reduce((sum, student) => sum + student.getAverageScore(), 0);

    return totalScore / this.students.length;
  }

  getStudents() {
    return [...this.students];
  }

  getStudentById(identifier: number | number[]): Student | Student[] | never {
    if (Array.isArray(identifier)) {
      const filteredStudents: Student[] = identifier
        .map((id) => this.students.find((student: Student) => student.id === id))
        .filter((student): student is Student => student !== undefined);
      return filteredStudents;
    } else {
      const foundStudent = this.students.find((student: Student) => student.id === identifier);
      if (foundStudent) {
        return foundStudent;
      } else {
        throw new UniversityError('Student not found in group');
      }
    }
  }
}

class Person {
  static nextId = 1;

  firstName: string;
  lastName: string;
  birthDay: Date;
  id: number;
  gender: Gender;
  contactInfo: ContactInfo;
  role: string;

  constructor(info: Info, role: string) {
    const { firstName, lastName, birthDay, gender, email, phone } = info;

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = birthDay;
    this.id = Person.nextId++;
    this.gender = gender;
    this.contactInfo = { email, phone };
    this.role = role;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  get age(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDay.getFullYear();
    const monthDiff = today.getMonth() - this.birthDay.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDay.getDate())) {
      age--;
    }

    return age;
  }
}

class Teacher extends Person {
  specializations = [];
  courses: Course[] = [];

  constructor(info: Info, specializations = []) {
    super(info, 'teacher');
    this.specializations = specializations;
  }

  assignCourse(course: Course): void {
    this.courses.push(course);
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter((course) => course.name !== courseName);
  }

  getCourses(): Course[] {
    return [...this.courses];
  }
}

class Student extends Person {
  academicPerformance: {
    totalCredits: number;
    gpa: number;
  } = {
    totalCredits: 0,
    gpa: 0,
  };
  enrolledCourses: Course[] = [];
  status: string;

  constructor(info: Info) {
    super(info, 'student');
    this.status = 'active';
  }

  enrollCourse(course: Course): never | void {
    if (this.status !== 'active') {
      throw new UniversityError('Cannot enroll: Student is not in active status');
    }
    if (course.credits) {
      this.enrolledCourses.push(course);
      this.academicPerformance.totalCredits += course.credits;
    }
  }

  getAverageScore(): number {
    return this.academicPerformance.gpa;
  }

  updateAcademicStatus(newStatus: string): void {
    this.status = newStatus;
  }

  getEnrolledCourses(): Course[] {
    return [...this.enrolledCourses];
  }
}
