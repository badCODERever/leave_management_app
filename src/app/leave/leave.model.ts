export class Leave {
    public leaveType: string;
    public noOfDays: number;
    public status: string;
    public reason: string;

    constructor(leaveType: string, noOfDays: number, status: string, reason: string) {
        this.leaveType = leaveType;
        this.noOfDays = noOfDays;
        this.status = status;
        this.reason = reason;
    }
}