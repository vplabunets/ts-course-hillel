// Roles: student, teacher
// Disciplines: Computer Science, Mathematics, Physics, Biology, Chemistry
// Academic status: active, academic leave, graduated, expelled

enum Role {
  Student = 'student',
  Teacher = 'teacher',
}

class UniversityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UniversityError';
  }
}

class University {
  name: string;
  courses: string[] = [];
  groups: { group?: string; course?: string }[] = [];
  people: { person?: string; role?: Role }[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addCourse(course: string) {
    this.courses.push(course);
  }

  addGroup(group: { group: string }) {
    this.groups.push(group);
  }

  addPerson(person: { person: string }) {
    this.people.push(person);
  }

  findGroupByCourse(course: string) {
    return this.groups.find((group) => group.course === course);
  }

  getAllPeopleByRole(role: Role) {
    switch (role) {
      case 'student':
        return this.people.filter((person) => person.role === 'student');
      case 'teacher':
        return this.people.filter((person) => person.role === 'teacher');
      default:
        return this.assertNeverRole(role);
    }
  }

  assertNeverRole(role: Role) {
    throw new Error(`Unhandled role: ${role}`);
  }
}

class Course {
  name: string;
  credits: number;
  discipline: string;

  constructor(name: string, discipline: string, credits: number) {
    this.name = name;
    this.credits = credits;
    this.discipline = discipline;
  }
}

class Group {
  name: string;
  course: string;
  teacher: string;
  students: { id: number; getAverageScore: () => number }[] = [];

  constructor(name: string, course: string, teacher: string) {
    this.name = name;
    this.course = course;
    this.teacher = teacher;
  }

  addStudent(student: { id: number; getAverageScore: () => number }) {
    if (this.students.includes(student)) {
      throw new UniversityError('Student is already in the group');
    }

    this.students.push(student);
  }

  removeStudentById(id: number) {
    const index = this.students.findIndex((student) => student.id === id);

    if (!~index) {
      throw new UniversityError('Student not found in group');
    }

    this.students.splice(index, 1);
  }

  getAverageGroupScore() {
    if (this.students.length) {
      return 0;
    }

    const totalScore = this.students.reduce((sum, student) => sum + student.getAverageScore(), 0);

    return totalScore / this.students.length;
  }

  getStudents() {
    return [...this.students];
  }
}

class Person {
  static nextId = 1;

  firstName: string;
  lastName: string;
  birthDay: Date;
  id: number;
  gender: string;
  contactInfo: {
    email: string;
    phone: string;
  };
  role: string;

  constructor(
    info: { firstName: string; lastName: string; birthDay: Date; gender: string; email: string; phone: string },
    role: string
  ) {
    const { firstName, lastName, birthDay, gender, email, phone } = info;

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = birthDay;
    this.id = Person.nextId++;
    this.gender = gender;
    this.contactInfo = { email, phone };
    this.role = role;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  get age() {
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
  courses: { name: string }[] = [];

  constructor(
    info: { firstName: string; lastName: string; birthDay: Date; gender: string; email: string; phone: string },
    specializations = []
  ) {
    super(info, 'teacher');
    this.specializations = specializations;
  }

  assignCourse(course: { name: string }) {
    this.courses.push(course);
  }

  removeCourse(courseName: string) {
    this.courses = this.courses.filter((course) => course.name !== courseName);
  }

  getCourses() {
    return [...this.courses];
  }
}

class Student extends Person {
  academicPerformance = {
    totalCredits: 0,
    gpa: 0,
  };
  enrolledCourses: { name: string }[] = [];
  status: string;

  constructor(info: {
    firstName: string;
    lastName: string;
    birthDay: Date;
    gender: string;
    email: string;
    phone: string;
  }) {
    super(info, 'student');
    this.status = 'active';
  }

  enrollCourse(course: { name: string; credits: number }) {
    if (this.status !== 'active') {
      throw new UniversityError('Cannot enroll: Student is not in active status');
    }

    this.enrolledCourses.push(course);
    this.academicPerformance.totalCredits += course.credits;
  }

  getAverageScore() {
    return this.academicPerformance.gpa;
  }

  updateAcademicStatus(newStatus: string) {
    this.status = newStatus;
  }

  getEnrolledCourses() {
    return [...this.enrolledCourses];
  }
}
