// Add a new compensation property of type number to the employee type.

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  directReports?: Array<number>;
  compensation: number;
}
